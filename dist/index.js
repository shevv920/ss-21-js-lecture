"use strict";

const {
  useState,
  useEffect
} = React;
const DEFAULT_DELAY_SEC = 2;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

function App() {
  const [stack, setStack] = useState([]);
  const [micro, setMicro] = useState([]);
  const [api, setApi] = useState([]);
  const [renderQueue, setRenderQueue] = useState([]);
  const [queue, setQueue] = useState([]);
  const [inProgress, setInProgress] = useState(false);

  const processStack = async () => {
    console.log('Processing stack');
    const copy = stack.slice();

    while (copy.length) {
      console.log('processing next stack item');
      const current = copy.pop();

      switch (current) {
        case 'promise':
          setMicro(prev => [...prev, current]);
          break;

        case 'normal':
          setStack(prev => [...prev, current]);
          break;

        case 'timeout':
          setApi(prev => [...prev, current]);
          break;
      }

      await sleep(2);
      setStack(copy);
    }
  };

  useEffect(() => {
    if (inProgress) return;
    processStack();
  }, [inProgress]);

  const onStartClick = async () => {
    if (inProgress) return;
    const queueCopy = queue.slice();
    setInProgress(true);

    while (queueCopy.length) {
      const current = queueCopy.pop();
      setStack(prev => [...prev, current]);
      setQueue(queueCopy);
      await sleep(DEFAULT_DELAY_SEC);
    }

    setInProgress(false);
  };

  const addItem = item => () => {
    if (inProgress) return;
    const newQueue = queue.slice();
    setQueue([...newQueue, item]);
  };

  const renderItem = (item, index) => /*#__PURE__*/React.createElement("span", {
    id: `${index}-${item}`,
    key: `${index}-${item}`,
    className: item
  }, item);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "queue"
  }, queue.map(item => /*#__PURE__*/React.createElement("span", {
    className: "queueItem"
  }, item))), /*#__PURE__*/React.createElement("button", {
    id: "addPromise",
    type: "button",
    onClick: addItem('promise')
  }, "Add Promise"), /*#__PURE__*/React.createElement("button", {
    id: "addTimeout",
    type: "button",
    onClick: addItem('timeout')
  }, "Add Timeout"), /*#__PURE__*/React.createElement("button", {
    id: "addNormal",
    type: "button",
    onClick: addItem('normal')
  }, "Add Normal"), /*#__PURE__*/React.createElement("button", {
    id: "startBtn",
    type: "button",
    onClick: onStartClick
  }, "Start")), /*#__PURE__*/React.createElement("div", {
    className: "visuals"
  }, /*#__PURE__*/React.createElement("div", {
    className: "queues"
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, stack.map(renderItem)), /*#__PURE__*/React.createElement("div", {
    className: "microQueue"
  }, micro.map(renderItem)), /*#__PURE__*/React.createElement("div", {
    className: "apiQueue"
  }, api.map(renderItem)), /*#__PURE__*/React.createElement("div", {
    className: "renderQueue"
  }, "render")), /*#__PURE__*/React.createElement("div", {
    className: "actor"
  }, "current")));
}

window.onload = () => {
  const root = document.querySelector('#root');
  ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);
};