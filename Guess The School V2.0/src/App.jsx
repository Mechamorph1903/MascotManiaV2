import './App.css'
import Cards from './components/cards'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  let answerBox = document.getElementById('answer-box');

  const handleCardClick = () => {
    if(answerBox.value !== ''){
    setIsFlipped(!isFlipped);
    } else {
      alert('Please enter a guess before flipping the card!');
    }
  };

 const updateCard = () => {
    // setCount(Math.floor(Math.random() * 12));
    if (count === 11) {
      // setCount(0);
      answerBox.value = '';
      alert('You have reached the end of the deck! Restart using the restart button!');
    } else {
    setCount(count + 1);
    answerBox.value = '';
    }

    if(isFlipped === true){
    setIsFlipped(!isFlipped);
    }
  };

  const updateCardBack = () => {
    // setCount(Math.floor(Math.random() * 12));
    if (count === 0) {
      // setCount(Schools.length - 1);
      alert('You have reached the beginning of the deck!');
    } else {
      setCount(count - 1);
      answerBox.value = '';
    }

    if(isFlipped === true){
    setIsFlipped(!isFlipped);
    }
  };

  const guessAnswer = () => {
    let answer = answerBox.value.toLowerCase();
    let mascotName = Schools[count].mascot.toLowerCase();

    answerBox.className = '';
    if (answer.length >= 4 && mascotName.includes(answer)) {
      alert('Correct!');
      setCurrentStreak(currentStreak + 1);
      answerBox.classList.add('correct');
    } else {
      alert('Incorrect! The correct answer is ' + Schools[count].mascot);
      let temp = currentStreak;
      if (temp > longestStreak){
        setLongestStreak(temp);
      }
      setCurrentStreak(0);
      answerBox.classList.add('wrong');
    }
  };

  const Schools = [
   {
      name: "The University of Southern Mississippi",
      mascot: "Seymour the Golden Eagle",
      img: "https://mascothalloffame.com/wp-content/uploads/2023/03/SoMiss-e1678822654287.jpg",
      location: "Hattiesburg, Mississippi",
      color: "linear-gradient(to right, #FFD14C, #000000)"
    },
    {
      name: "Mississippi State University",
      mascot: "Bully the Bulldog",
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4986,h_2804,x_0,y_0/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images%2FImagnImages%2Fmmsport%2F296%2F01hs9pn45cbxr030xb1z.jpg",
      location: "Starkville, Mississippi",
      color: "#6B0808"
    },
    {
      name: "University of Florida",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Albert_and_Alberta.jpg/413px-Albert_and_Alberta.jpg",
      location: "Gainesville, Florida",
      mascot: "Albert and Alberta the Alligators",
      color: "linear-gradient(to right, #EA6B36, #0000FF)"
    },
   {
      name: "University of Alabama",
      img: "https://rolltide.com/images/2023/7/3/BigAl.jpg",
      location: "Tuscaloosa, Alabama",
      mascot: "Big Al the Elephant",
      color: "#A6273C"
    },
    {
      name: "University of Iowa",
      img: "https://dailyiowan.com/wp-content/uploads/2023/10/2023_09_16_HERKY_CB0014.jpg",
      location: "Iowa City, Iowa",
      mascot: "Herky the Hawk",
      color: "linear-gradient(to right, #080808, #EFBF04)"
    },
    {
      name: "Purdue University",
      img: "https://cdn.vox-cdn.com/thumbor/CZanmYHNBcX2_ebuO064DRgyxqE=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24837724/usa_today_17012264.jpg",
      location: "West Lafayette, Indiana",
      mascot: "Purdue Pete",
      color: "#EAD6B5"
    },
    {
      name: "University of Texas",
      img: "https://tower.utexas.edu/wp-content/uploads/2016/09/tumblr_inline_nuq1u5BHTL1qjkl22_1280.jpg",
      location: "Austin, Texas",
      mascot: "Hook 'em the Longhorn",
      color: "#C15C08"
    },
  {
      name: "University of Georgia",
      img: "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape%2Fcover%2Fsport%2F71a7209514434dda285c1fdb3e04e82084e4a2a4eb881f62a899f5c9cdc533df.jpg",
      location: "Athens, Georgia",
      mascot: "Hairy Dawg",
      color: "#BC1436"
    },
    {
      name: "University of Tennessee",
      img: "https://cloudfront-us-east-1.images.arcpublishing.com/gray/BULMNEVXERFABKYA7BWPTBUHV4.jpg",
      location: "Knoxville, Tennessee",
      mascot: "Smokey the Bluetick Coonhound",
      color: "#FF8008"
    },
    {
      name: "University of Colorado",
      img: "https://www.colorado.edu/coloradan/sites/default/files/styles/large/public/slider/coloradanfall21-looka-1500x1000.png?itok=vlc-TEHS",
      location: "Boulder, Colorado",
      mascot: "Chip the Buffalo",
      color: "linear-gradient(to right, #C9B278, #000000)"
    },
   {
      name: "University of Oregon",
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4934,h_2775,x_0,y_184/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/ImagnImages/mmsport/ducks_digest/01j59hppxzdtwhstfwya.jpg",
      location: "Eugene, Oregon",
      mascot: "The Oregon Duck(Donald Duck)",
      color: "linear-gradient(to right, #FEE22A, #1C4C39)"
    },
    {
      name: "University of Miami",
      img: "https://mascothalloffame.com/wp-content/uploads/2019/09/Sebastian-The-Ibis-Univ-of-Miami.png",
      location: "Coral Gables, Florida",
      mascot: "Sebastian the Ibis",
      color: "linear-gradient(to right, #F47727,#085536)"
    }
  ]
  

  return (
    <div className='main-contain'>
      <div className='Header'>
      <h1>Mascot Mania!</h1>
      <h4>In this app, you are going to guess Colleges based on their Mascot. Are you Mascot-Savvy?</h4>
      <h6>Number of cards: {Schools.length}</h6>
      <span className='scores'><h5>Current Streak: {currentStreak}</h5><h5>Longest Streak: {longestStreak}</h5></span>
      </div>
      <div className='cards'>
        <Cards school={Schools[count]} clicker={handleCardClick} isFlipped={isFlipped}/>
      </div>
      <form className='container'>
        <input type="text" name="" id="answer-box" placeholder='Mascot Name...'/>
        <button type='guess-answer' onClick={(e) => {
          e. preventDefault();
          guessAnswer();
        }}>Guess Answer</button>
      </form>
      <button onClick={updateCardBack}>Previous</button>
      <button onClick={updateCard}>Next</button>
      <button onClick={() => {
        setCurrentStreak(0);
        setCount(0);
        answerBox.value = '';
      }}>restart</button>
    </div>
  );
}

export default App;
