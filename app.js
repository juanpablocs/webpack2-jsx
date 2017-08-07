const click = (e)=>{
  console.log('work correctly');
};

const clickNested = (e)=>{
  console.log('nested',e);
}

const render = (
  <div className="test">
    <li onClick={click}>Sum { 1 + 2 }</li>
    <div>{ ['a','b'].map((el)=> <li onClick={clickNested}>{el}</li>) }</div>
  </div>
);

document.getElementById('root').appendChild(render);
console.log(render);
