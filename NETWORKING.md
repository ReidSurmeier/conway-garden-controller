# Networking And Remote Service

**Current state at audit:** Pi is reachable on Wi-Fi and Tailscale.  
**Target client state:** Pi Wi-Fi disabled; service access over direct Ethernet.

## Current Live Network State

At audit time:

```text
wlan0      10.1.77.53/24 on RISD-MiscDevices
tailscale0 100.111.173.39/32
eth0       link detected at 1 Gbps, but no IPv4 address
```

NetworkManager is active and managing devices.

## Verification Update: May 15, 2026

Direct Ethernet SSH has been configured and tested from Reid's Mac:

```text
Mac USB Ethernet: 10.55.0.1/24 on AX88179B/en9, router blank
Pi eth0:          10.55.0.2/24 on conway-direct-ethernet
```

Proof from the Mac:

```bash
ping 10.55.0.2
ssh -i ~/.ssh/linux_desktop pi@10.55.0.2 'hostname; ip -br addr show eth0'
```

Observed result:

```text
ping 10.55.0.2: 0% packet loss
ssh pi@10.55.0.2: hostname conway-garden-1
eth0: 10.55.0.2/24
```

Wi-Fi and Tailscale were intentionally left enabled as fallbacks:

```text
wlan0:      10.1.77.53/24 on RISD-MiscDevices
tailscale0: 100.111.173.39/32
default:    via 10.1.77.1 dev wlan0
```

Internet access is still coming from the Pi's own Wi-Fi. A forced test route
through the Mac Ethernet address failed:

```bash
sudo ip route replace 1.1.1.1/32 via 10.55.0.1 dev eth0 src 10.55.0.2
ping -c 3 -W 2 1.1.1.1
```

Observed result:

```text
1.1.1.1 via 10.55.0.1 dev eth0 src 10.55.0.2
3 packets transmitted, 0 received, 100% packet loss
```

The temporary test route was removed after testing. Normal Wi-Fi internet on
the Pi still worked afterward.

## Recommended Direct Ethernet Plan

Use a static service subnet:

```text
Mac USB Ethernet: 10.55.0.1/24
Pi eth0:          10.55.0.2/24
```

Then connect from the Mac:

```bash
ssh pi@10.55.0.2
```

## Pi Setup Commands

Run only when physically present or while Wi-Fi/Tailscale is still available
as fallback:

```bash
sudo nmcli con add type ethernet ifname eth0 con-name conway-direct-ethernet \
  ipv4.method manual ipv4.addresses 10.55.0.2/24 ipv6.method disabled

sudo nmcli con modify conway-direct-ethernet connection.autoconnect yes
sudo nmcli con up conway-direct-ethernet
ip -br addr show eth0
```

Do not disable Wi-Fi until SSH over `10.55.0.2` has been tested from the Mac.

## Mac Setup

On macOS:

1. Open System Settings.
2. Network.
3. Select the USB-C Ethernet adapter.
4. Configure IPv4: Manually.
5. IP address: `10.55.0.1`.
6. Subnet mask: `255.255.255.0`.
7. Router: blank.
8. Apply.

Test:

```bash
ping 10.55.0.2
ssh pi@10.55.0.2
```

Codex can be run on the Mac and use that SSH target directly.

## Product Service Workflow

For field service or exhibition support, direct Ethernet SSH is enough when
the technician's Mac supplies the update payload. The Pi does not need its own
internet connection for a Mac-pushed code update.

Recommended product flow:

1. Connect the Mac USB Ethernet adapter to the Pi.
2. Confirm the Mac can reach `pi@10.55.0.2`.
3. Copy the release bundle from the Mac to the Pi over SSH.
4. Run the install or restart command over the same SSH session.

Example:

```bash
rsync -av ./release/ pi@10.55.0.2:/home/pi/conway-garden-controller/
ssh pi@10.55.0.2 'cd ~/conway-garden-controller && ./scripts/install.sh'
```

Mac Internet Sharing is only required when the Pi must download from the
internet itself, such as:

```text
git pull
apt install / apt upgrade
pip install
container image pulls
OS package or firmware updates
```

Do not make Internet Sharing part of the normal product service path unless
the release procedure explicitly depends on Pi-side downloads. A push-from-Mac
release bundle is simpler and more reliable because Ethernet SSH has already
been proven while Mac Internet Sharing has not.

## Disabling Wi-Fi After Ethernet Works

After direct Ethernet SSH works:

```bash
nmcli con show
sudo nmcli con modify RISD-MiscDevices connection.autoconnect no
sudo nmcli radio wifi off
```

For a permanent no-Wi-Fi client handoff, document the exact active Wi-Fi
connection name before disabling it. Do not delete the profile unless there is
a working recovery path.

## Internet Sharing Option

If the Pi must reach the internet without joining Wi-Fi itself, use macOS
Internet Sharing:

```text
Share your connection from: Wi-Fi
To computers using: USB Ethernet
```

This is not required for normal operation. It is useful for updates or remote
service when the Pi is cabled to a technician's Mac.

As of May 15, 2026, this option has not been proven on Reid's Mac. The Mac had
the USB Ethernet adapter set to `10.55.0.1/24`, but traffic forced from the Pi
through `10.55.0.1` did not reach the internet. Do not rely on Mac Internet
Sharing until a forced-route test succeeds while the Pi's own Wi-Fi remains
available as a fallback.

## SSH Policy

Current SSH config keeps both key and password recovery access:

```text
system/etc-ssh-sshd_config.d-10-conservation.conf
```

For exhibition handoff, key auth is preferred. Password auth remains useful as
a last-resort museum recovery path, but the password should be controlled by
the owner/client.
