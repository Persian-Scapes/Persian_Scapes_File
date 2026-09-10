from pathlib import Path
import json
from urllib.parse import quote
import qrcode
ROOT=Path(__file__).parent
data=json.loads((ROOT/"data/atlas.json").read_text(encoding="utf-8"))
base=data["project"]["siteUrl"].rstrip("/")+"/"
for item in data["locations"]:
    qrcode.make(base+"location.html?id="+quote(item["id"])).save(ROOT/item["qr"])
print(f"Generated {len(data['locations'])} QR codes for {base}")
