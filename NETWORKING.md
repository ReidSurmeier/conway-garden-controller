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

## SSH Policy

Current SSH config keeps both key and password recovery access:

```text
system/etc-ssh-sshd_config.d-10-conservation.conf
```

For exhibition handoff, key auth is preferred. Password auth remains useful as
a last-resort museum recovery path, but the password should be controlled by
the owner/client.
