# Catalog Viewer and Search Angular 11 Project

This project imitates a viewer which displays a games catalog and allows a user to search the catalog. The games catalog is an API which is provided by https://api.rawg.io/. 

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## For API to Function 

1. Create own environments folder in app/environments 
2. Create a environment.ts file
3. Add the following consts to environment.ts: 
* BASE_URL: 'https://api.rawg.io/api'
* RAWG_RAPIDAPI_KEY: 'YourAPIKEY'

# Todo (someday)
- Fix screenshots tab styling (screenshots are too big!)
- Add paging to Games List (only show 20 "game cards" atm)
- Add smarter styling based on game background (see witcher 3 and how the white text blends into the background)






