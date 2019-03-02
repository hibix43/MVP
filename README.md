# MVP

## Description

MVP is multiple videos player.

## Run

1. npm run build
2. npm run electron

## State Shape

```javascript
{
    data: [
        { path: '/VIDEOS/aaa.mp4' },
        { path: '/VIDEOS/bbb.mp4' },
    ],
}
```

## Structure

```structure
.
├── README.md
├── package-lock.json
├── package.json
├── public
│   └── index.html
└── src
    ├── actions
    │   └── index.js
    ├── components
    │   ├── App.js
    │   ├── LoadForm.js
    │   ├── Videos.js
    │   └── VidosListView.js
    ├── containers
    │   ├── LoadVideo.js
    │   └── VideosList.js
    ├── index.js
    ├── main.js
    └── reducers
        └── videos.js
```