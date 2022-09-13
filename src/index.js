import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import { useState } from "react";
import reportWebVitals from './reportWebVitals';


function ChangeClass() {
  const [hidden1, setRight1] = useState("hidden");
  const [hidden2, setRight2] = useState("hidden");
  const [hidden3, setRight3] = useState("hidden");
  const [hidden4, setRight4] = useState("hidden");
  const [hidden5, setRight5] = useState("hidden");
  const [count, setCount] = useState(0);

  var feedback = ''
  if (count <= 3) {
    feedback = 'Спробуйте ще раз!'
  }
  if (count >= 4) {
    feedback = 'Гарна робота!'
  }
  
  const handleClick = event => {
    event.currentTarget.classList.add('wrong');
  };

  function showResult() {
    const myResult = (
      <div className='quiz-app headline submit'>
        <h1>Вітаємо!</h1>
      <h2>Ваш результат: {count} - {feedback}</h2>
      <button className='refresh-btn' onClick={refresh}>На Головну</button>
      </div>
    ); 
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(myResult);
  }
  
  function refresh () {
    window.location.reload();
  }
  
  function rightChoice1() {
    setRight1("right")
    setCount((c) => c + 1)
  }
  function rightChoice2() {
    setRight2("right")
    setCount((c) => c + 1)
  }
  function rightChoice3() {
    setRight3("right")
    setCount((c) => c + 1)
  }
  function rightChoice4() {
    setRight4("right")
    setCount((c) => c + 1)
  }
  function rightChoice5() {
    setRight5("right")
    setCount((c) => c + 1)
  }

  function wrongChoice() {
    alert('Неправильна відповідь! Спробуйте ще!')
    setCount((c) => c - 1)
  }

  return (
    <div className="quiz-app">
      <h1 className='headline'>Вікторина</h1>
      <h2 className='score-centered'>Ваші очки: {count}</h2>
      <ul>Яке місто є столицею України?
        <button className="" onClick={rightChoice1}>Київ</button>
        <h2 className={`${hidden1}`}>Вірно!</h2>
        <button className='b' onClick={wrongChoice}>Анкара</button>
        <button className='c' onClick={wrongChoice}>Хокайдо</button>
        <button className='d' onClick={wrongChoice}>Янґон</button>
      </ul>
      <ul>Де живе Ілон Маск?
        <button className='a' onClick={wrongChoice}>В Преторії</button>
        <button className='b' onClick={rightChoice2}>В Лос-Анджелесі</button>
        <h2 className={`${hidden2}`}>Вірно!</h2>
        <button className='c' onClick={wrongChoice}>В Полтаві</button>
        <button className='d' onClick={wrongChoice}>В Вінніпезі</button>
      </ul>
      <ul>Де вперше було помічено спалах коронавірусу?
        <button className='a' onClick={wrongChoice}>У місті Бидгощ, Польща</button>
        <button className='b' onClick={wrongChoice}>У місті Нью-Йорк, США</button>
        <button className='c' onClick={wrongChoice}>У місті Усурійськ, РФ</button>
        <button className='d' onClick={rightChoice3}>У місці Ухань, КНР</button>
        <h2 className={`${hidden3}`}>Вірно!</h2>
      </ul>
      <ul>Коли було зафіксовано перший спалах коронавірусу?
        <button className='a' onClick={wrongChoice}> Початок 2019-го року</button>
        <button className='b' onClick={rightChoice4}> Кінець 2019-го року</button>
        <h2 className={`${hidden4}`}>Вірно!</h2>
        <button className='c' onClick={wrongChoice}>Початок 2020-го року</button>
        <button className='d' onClick={wrongChoice}>Кінець 2020-го року</button>
      </ul>
      <ul>Яка страва є традиційною на День подяки в США?
        <button className='a' onClick={wrongChoice}>Морозиво</button>
        <button className='b' onClick={rightChoice5}>Індичка</button>
        <h2 className={`${hidden5}`}>Вірно!</h2>
        <button className='c' onClick={wrongChoice}>Торт</button>
        <button className='d' onClick={wrongChoice}>Рисове рагу</button>
      </ul>
      <button className='submit' type='submit' onClick={showResult}>Завершити</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChangeClass />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
