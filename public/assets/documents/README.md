# Dokumente Ordner

Dieser Ordner enthält alle herunterladbaren Dokumente für das Portfolio.

## Struktur

- **Hauptdokumente** (im Root dieses Ordners):
  - `lebenslauf.pdf` - Dein Lebenslauf/CV
  - `Zertifikat_Klemtz, Christoph_FbW WD 24-D04 A-2.pdf` - Dein Hauptzertifikat

- **Zusätzliche Zertifikate** (im Unterordner `additional/`):
  - Alle weiteren Zertifikate/Teilnahmeurkunden

## Weitere Zertifikate hinzufügen

1. Lade deine PDF-Zertifikate in den Ordner `public/assets/documents/additional/` hoch
2. Öffne die Datei: `public/assets/documents/additional/certificates.json`
3. Füge dein neues Zertifikat zur Liste hinzu:

```json
[
  {
    "name": "KI-Ethik Zertifikat",
    "filename": "ki-ethik_certificate.pdf"
  },
  {
    "name": "Dein neues Zertifikat",
    "filename": "dein-zertifikat.pdf"
  }
]
```

**Wichtig:**
- `name`: Der Anzeigetitel des Zertifikats
- `filename`: Der exakte Dateiname der PDF im `additional` Ordner

Die Zertifikate werden automatisch beim Laden der Seite eingelesen!

## Funktionsweise

- Beim Klick auf "Zertifikate ansehen" wird das Hauptzertifikat angezeigt
- Der Button "Weitere Zertifikate" erscheint, wenn zusätzliche Zertifikate vorhanden sind
- Die Zertifikate werden aus der `certificates.json` geladen
- Bei Klick auf ein Zertifikat öffnet sich die Vollansicht
- Aus der Vollansicht kann man zurück zur Übersicht oder das Zertifikat herunterladen
