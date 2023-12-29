# Logo with text in white
from PIL import Image, ImageDraw, ImageFont

# Create a new image
img = Image.new('RGB', (500, 500), color = 'white')

# Load the font
font = ImageFont.truetype('arial.tff', 36)

# Get drawing context
d = ImageDraw.Draw(img)

# Draw text
d.text((100, 200), "sierra-95", fill=(0, 0, 0), font=font)

# Save the image
img.save('sierra-95_white.png')

# Logo with text in black
from PIL import Image, ImageDraw, ImageFont

# Create a new image
img = Image.new('RGB', (500, 500), color = 'black')

# Load the font
font = ImageFont.truetype('arial.ttf', 36)

# Get drawing context
d = ImageDraw.Draw(img)

# Draw text
d.text((100, 200), "sierra-95", fill=(255, 255, 255), font=font)

# Save the image
img.save('sierra-95_black.png')
