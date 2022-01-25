# maps

This app it show localte you places in a map!! I hope you all enjoyed!!!

## 🚀 to start

to start to ejecuting this code you should:

- Open your terminal in a concret folder
- Ejecute the comand:

```
git clone https://github.com/jonCroatanUto/maps.git
```

- Go inside the folder `maps` and run:

```
npm install
```

- For this project you should use this Api https://developers.themoviedb.org/3
- Create a `.env` file adding in it:

```
REACT_APP_GOOGLE_API=`this should be your google api key`

```

# 🦴 Project Structure

## Folder structure 🗂

<pre>  
├───.github     <i>// Github actions config files </i>
├───public
└───src	
    ├───components
    |        ├───Marker
    |        ├───Maps
    |        └───Input
    ├───pages
    |       ├───Home
    |       ├───PracticalChallace
    |       └───TheoricalChallace
    |        
    └───redux
          └───MarkerReducer
   


</pre>

# 🧭 App navigation

## Home page 🗺

In the Home page you can found two links: one to see the theorical part of this challance , other to see the practical exercise

## Map component

This components is the main component of the application, there is one call connection to google map api and it from this component. The call connect to component imported from react-google-map library and set the data from google api to them: <ReactGooglePlacesSuggest>to the input text that suggest places and <GoogleMapReact> that render the map.
Both are Wrapped by the component <ReactGoogleMapLoader> that bring to the childs components the conection with google api , the api key and google libraries

## Marker

This component renders in map component when the user select a place. First of this the data that marker needs is set in a reducer. The render have to read if the marker is the current Marker and if it is render with different styles.

# ✨ Wishlist

- Get deeply with functionalities with jest, there is some error message related with syncronies functions that I don't know how to fixed yet (first time with it..).
- modulate more my project , try to found a way to wrap the map and the place suggest input but in different files.
- Change the type of coincident text on the placeSuggest
- Get the ubication of the user , set in a redux and display in the map if the user accept to share it

# 🖇️ Contributing

If you want to contribute, please fork the repository, create a new branch whit your contribution, and push the branch as a pull requests.
