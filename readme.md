# react-timer

## How to use ?
* `npm install`
* `npm run build` -- to compile
* `npm start` -- to run example

> You can see example/src/index.js to learn how to use.


### As a component

```react
class App extends React.Component {
    render(
        <Timer
            onCall={() => console.log('Hello world!')
            interval={1000}}
        />
    );
}
```

| prop | isRequire | type | description |
| :---: | :---: | :---:| :---: |
| onCall | true | function | will call per interval time |
| interval | false | number | default is 100 |


## Static methods
| method | example |
| :---: | :---: |
| start | Timer.start(onCall, interval) |
| stop | Timer.stop() |