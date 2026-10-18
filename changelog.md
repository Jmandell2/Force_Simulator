## Issues:


- Fix vertical rise up
- Animations glitchy
- Fixing getting up
- Pixel stream not going back to frontend
- make unreal disconnect when level stops
- Frontend looks different depending on your browser type spacing wise
- Reorganize your .env files
- Standardize IP/Port Info so you can run from anywhere


## Solved:
- character variable is null in unreal blueprint, and it's not being exposed to let me set it
    - solution when you change the header file you need to re add the blueprint to your scene because the instance in your scene won't update with your re-compile
