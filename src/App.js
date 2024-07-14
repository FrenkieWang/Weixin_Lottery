import React, {useState} from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [user, setUser] = useState(0);

  function draw(){
    const winner = Math.floor(Math.random() * amount) + 1;
    setUser(winner);
  }

  return (
    <div className="App">
      <h1>用React制作的抽奖小程序</h1>
      <div>
        <label>请输入微信点赞用户个数：</label>
        <input 
          type ="text"
          value = {amount}
          onChange = {e => setAmount(e.target.value)}
        />
      </div>
      <h3>一共有 &nbsp;
        <span style ={{color: 'red'}}>{amount} </span>
        &nbsp; 个用户给我这条朋友圈点赞
      </h3>
      <div>
        <button onClick={draw}>点击按钮抽奖</button>
      </div>
      <h2>获奖用户是朋友圈第 &nbsp;
        <span style ={{color: 'red'}}>{user} </span>
        &nbsp; 个点赞的用户
      </h2>
    </div>
  );
}

export default App;