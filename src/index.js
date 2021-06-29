const { useState, useEffect } = React;

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

    while(copy.length) {
      console.log('processing next stack item');
      const current = copy.pop();
      switch(current) {
        case 'promise':
          setMicro((prev) => [...prev, current]);
          break;
        case 'normal':
          setStack((prev) => [...prev, current]);
          break;
        case 'timeout':
          setApi((prev) => [...prev, current]);
          break;
      }
      await sleep(2);
      setStack(copy);
    }

  };

  useEffect(() => {
    if(inProgress) return;

    processStack();
  }, [inProgress])

  const onStartClick = async () => {
    if (inProgress) return;

    const queueCopy = queue.slice();
    setInProgress(true);
    while(queueCopy.length) {
      const current = queueCopy.pop();
      setStack((prev) => [...prev, current]);
      setQueue(queueCopy);
      await sleep(DEFAULT_DELAY_SEC);
    }
    setInProgress(false);
  };

  const addItem = (item) => () => {
    if (inProgress) return;
    const newQueue = queue.slice();
    setQueue([...newQueue, item]);
  }

  const renderItem = (item, index) => <span id={`${index}-${item}`}  key={`${index}-${item}`} className={item}>{item}</span>;

  return (
    <React.Fragment>
      <div className="controls">
        <div className="queue">
          {queue.map((item) => <span className="queueItem">{item}</span>)}
        </div>
        <button id="addPromise" type="button" onClick={addItem('promise')}>Add Promise</button>
        <button id="addTimeout" type="button" onClick={addItem('timeout')}>Add Timeout</button>
        <button id="addNormal" type="button" onClick={addItem('normal')}>Add Normal</button>
        <button id="startBtn" type="button" onClick={onStartClick}>Start</button>
      </div>

      <div className="visuals">
        <div className="queues">
          <div className="stack">
            {stack.map(renderItem)}
          </div>
          <div className="microQueue">
            {micro.map(renderItem)}
          </div>
          <div className="apiQueue">
            {api.map(renderItem)}
          </div>
          <div className="renderQueue">
            render
          </div>
        </div>
        <div className="actor">
          current
      </div>
      </div>
    </React.Fragment>
  );
}
window.onload = () => {
  const root = document.querySelector('#root');
  ReactDOM.render(<App />, root);
};
