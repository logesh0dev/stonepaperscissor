import React, { useEffect, useState } from 'react';
import './stonepaoerscissor.css';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { IconButton } from '@mui/material';
import $ from 'jquery';
import { Celebration } from './celebration';


export const Stonepaperscissor = () => {

    const options = [
        { name: 'Stone', id: 1, src: '/src/assets/stone.png' },
        { name: 'Paper', id: 2, src: '/src/assets/paper.png' },
        { name: 'Scissor', id: 3, src: '/src/assets/scissors.png' }
    ]

    var [opponent, setopponentvalue] = useState(0);
    var [winner, setwinner] = useState('');
    var [count, setCount] = useState(5);
    var [disablegame, setdisablegame] = useState(false);

    var [playerwinningcount, setplayerwinningcount] = useState(0);
    var [computerwinningcount, setpcomputerwinningcount] = useState(0);

    var [scorecard, setscorecard] = useState([]);



    function reset() {
        setopponentvalue('');
        setwinner('');
        setCount(5);
        setdisablegame(false);
        setscorecard([]);
        setplayerwinningcount(0);
        setpcomputerwinningcount(0)
    }

    function clash(value) {


        var a = options
        // a.splice(a.indexOf(value), 1)


        var b = a[Math.floor(Math.random() * a.length)]

        if ((value.id == 1 && b.id == 3) || (value.id == 2 && b.id == 1) || (value.id == 3 && b.id == 2)) {
            setwinner('Wins')
            setplayerwinningcount(playerwinningcount + 1)
            // playerwinningcount++
            setscorecard(prev => [...prev, { name: 'Player', src: "/src/assets/player.png" }]);
        }
        else if (value.id == b.id) {
            setwinner('Draw');
            // setscorecard(prev => [...prev, 'Draw'])
            setscorecard(prev => [...prev, { name: 'Draw', src: "/src/assets/equal.png" }]);

        }
        else {
            setwinner('Lose')
            setpcomputerwinningcount(computerwinningcount + 1)
            // setscorecard(prev => [...prev, 'Computer'])
            setscorecard(prev => [...prev, { name: 'Computer', src: "/src/assets/ai.png" }]);

            // computerwinningcount++

        }


        setCount(prev => {
            const newCount = prev - 1;

            if (newCount === 0) {
                setdisablegame(true);

                // Perform additional actions when count reaches 5
                console.log('instance Check', count);
            }

            return newCount;
        }
        )
        console.log('current count value', count)



        setopponentvalue(b)


    }

    function createElements() {
        var elements = [];
        var l = scorecard.length == 0 ? 5 : 5 - scorecard.length
        console.log(l)
        for (let i = 0; i < l; i++) {
            elements.push(<div></div>);
        }
        return elements;
    }

    useEffect(() => {

        //   $('#opponentdivid').css("animation", "zoom")
        document.getElementById('opponentdivid').style.animationName = "zoom"
        setTimeout(() => {
            document.getElementById('opponentdivid').style.animationName = ""

        }, 1000);

    }, [opponent]);

    return (
        <div className='wholediv centerdiv'>
            <div>
                {count == 5 ? (
                    <h2>You totally have 5 rounds</h2>
                ) :
                    disablegame ? playerwinningcount > computerwinningcount ? (<h2>You won the Match</h2>) : playerwinningcount == computerwinningcount ? (<h2>Match Draw</h2>) : (<h2>Computer Won the Match</h2>) : (<h2>You have {count} rounds remaining</h2>)

                }
            </div>

            <div className='clashdiv' >
                <div id="playeroptiondiv" className='  playerdiv' disabled={disablegame}  >
                    {options.map((item, index) => {
                        return (<div id={index + 1} className='centerdiv optiondiv' onClick={(e) => { clash(item) }} key={index} ><img src={item.src} className="logo react" alt="Vite logo" />{item.name}</div>)
                    })}
                </div>

                <div className='clashicon' >

                    <img src={'/src/assets/sword.png'} className="logo react" alt="Vite logo" />
                    <div>

                        {/* <IconButton  size="large" color="secondary">
                            
                        </IconButton> */}
                        <IconButton variant="contained"  onClick={() => reset()} aria-label="Example">
                            <RotateLeftIcon style={{ color: "white" }} sx={{ fontSize: 30 }}  ></RotateLeftIcon>

                        </IconButton>
                    </div>
                    <p>{winner}</p>

                </div>

                <div className='opponentdiv' disabled={disablegame} >
                    <div className='centerdiv opponentchilddiv' id="opponentdivid" >
                        {
                            opponent ? (<><img src={opponent.src} className="logo react" alt="Vite logo" />{opponent.name}</>) : (<></>)
                        }
                    </div>
                </div>

            </div>


            <div className='sequencediv' >
                {scorecard.map((value, index) => {
                    return value.name == 'Player' ? (<div key={index} ><img className="logo react" src={value.src} /></div>) : value.name == 'Draw' ? (<div key={index} ><img src={value.src} className="logo react" /></div>) : (<div key={index} ><img src={value.src} className="logo react" /></div>)
                })}

                {createElements()}


            </div>
            <div className='celebration' >
                {count == 0 && playerwinningcount > computerwinningcount ? (<Celebration></Celebration>) : (<></>)}
            </div>
        </div>
    )
}
