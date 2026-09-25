import re

with open("/tmp/homepage.html") as f:
    html = f.read()

print("=== VIDEO TAGS ===")
for match in re.finditer(r"<video[^>]*>.*?</video>|<video[^>]*/>|<video[^>]*>", html, re.DOTALL | re.IGNORECASE):
    print(match.group(0)[:1000])

print("\n=== VIDEO URLS (.mp4, .webm, .mov, etc) ===")
vids = set(re.findall(r"https?://[^\s\"\'\<\>]+\.(?:mp4|webm|mov|m3u8)", html, re.IGNORECASE))
print("Found video URLs:", vids)

print("\n=== POSTERS ===")
posters = set(re.findall(r"poster=[\"\']([^\"\']+)[\"\']", html, re.IGNORECASE))
print("Found posters:", posters)

print("\n=== ALL MEDIA UPLOADS IN HOMEPAGE ===")
uploads = sorted(list(set(re.findall(r"https://choicefoodsgroup\.com/wp-content/uploads/[^\s\"\'\<\>\)\,]+\.(?:avif|webp|jpg|jpeg|png|mp4)", html, re.IGNORECASE))))
for u in uploads:
    print(u)
