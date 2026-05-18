# Data Manager

This repo includes a local admin UI for editing the JSON files in `js/data` and generating their matching minified files.

Open it from a local server:

```powershell
python -m http.server 8001
```

Then visit:

```text
http://localhost:8001/admin.html
```

## Saving Files

The manager runs in the browser. It does not need Node.js to save files.

To save directly into the repo:

1. Click **Open js/data folder**.
2. Select this repo's `js/data` folder.
3. Edit the JSON or language fields.
4. Click **Save**.

The browser will write both the source files and the minified versions:

```text
books.json
books.min.json
translations.json
translations.min.json
```

## Buttons

- **Raw JSON** toggles between the form editor and raw JSON text.
- **Validate** checks the selected file before saving.
- **Minify file** generates the selected file's `.min.json`.
- **Minify all** generates every `.min.json` file for the loaded source JSON files.
- **Save** writes source JSON files and minified JSON files.

## Languages

`translations.json` is treated as the language file.

- Select a language in the sidebar to edit its fields.
- Add a language with the input under **Languages**.
- New languages are copied from `en`, with text fields emptied.
- Use the `-` button to delete the selected language.

## Browser Notes

Direct folder saving uses the browser File System Access API. It works best in Chromium-based browsers such as Chrome or Edge on `localhost`.

If the browser does not support direct folder saving, the manager falls back to downloading the generated JSON files.
