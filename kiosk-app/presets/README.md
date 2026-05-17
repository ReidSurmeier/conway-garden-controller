# GUI Settings Presets

This folder contains preset configuration files that can be loaded via URL hash parameters.

## Quick Usage

```
http://your-app.com/#preset=example
http://your-app.com/#example
```

Both formats load `example.json` from this folder.

## Creating a Preset

1. Configure settings in the GUI
2. Open GUI Settings → Presets → "Export as Preset"
3. Save the downloaded JSON file to this folder
4. Load via URL: `your-url/#preset=yourname`

All config sections are optional — missing sections use defaults.

For full documentation, see [DEVELOPER_GUIDE.md](../../DEVELOPER_GUIDE.md#preset-system).
