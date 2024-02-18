import React, { useEffect, useState } from 'react';
import './imageslidecss.css';
import { ColorLensOutlined } from '@mui/icons-material';

export const Imageslide = () => {

    const [updatedvariable, setupdatedvariable] = useState('logesh')

    function updatevalue() {
        setupdatedvariable('Ajay')
        console.log('updated value is :', updatedvariable)
    }

    // useEffect(() => {
    //     let slider = document.querySelector('.slider .list');
    //     let items = document.querySelectorAll('.slider .list .item');
    //     let next = document.getElementById('next');
    //     let prev = document.getElementById('prev');
    //     let dots = document.querySelectorAll('.slider .dots li');

    //     let lengthItems = items.length - 1;
    //     let active = 0;
    //     next.onclick = function () {
    //         active = active + 1 <= lengthItems ? active + 1 : 0;
    //         reloadSlider();
    //     }
    //     prev.onclick = function () {
    //         active = active - 1 >= 0 ? active - 1 : lengthItems;
    //         reloadSlider();
    //     }
    //     let refreshInterval = setInterval(() => { next.click() }, 3000);
    //     function reloadSlider() {
    //         slider.style.left = -items[active].offsetLeft + 'px';
    //         // 
    //         let last_active_dot = document.querySelector('.slider .dots li.active');
    //         last_active_dot.classList.remove('active');
    //         dots[active].classList.add('active');

    //         clearInterval(refreshInterval);
    //         refreshInterval = setInterval(() => { next.click() }, 3000);


    //     }

    //     dots.forEach((li, key) => {
    //         li.addEventListener('click', () => {
    //             active = key;
    //             reloadSlider();
    //         })
    //     })
    //     window.onresize = function (event) {
    //         reloadSlider();
    //     };


    // })

    return (
        <>
            <div>
                <button onClick={() => { updatevalue() }}   >click me</button>
                <p>{updatedvariable}</p>
            </div>
        </>
        // <div class="slider">
        //     <div class="list">
        //         <div class="item">
        //             <img src={'/src/assets/img/1.jpg'}  alt="" />
        //         </div>
        //         <div class="item">
        //             <img src={'/src/assets/img/2.jpg'} alt="" />
        //         </div>
        //         <div class="item">
        //             <img src={'/src/assets/img/3.jpg'} alt="" />
        //         </div>
        //         <div class="item">
        //             <img src={'/src/assets/img/4.jpg'} alt="" />
        //         </div>
        //         <div class="item">
        //             <img src={'/src/assets/img/5.jpg'} alt="" />
        //         </div>
        //     </div>
        //     <div class="buttons">
        //         <button id="prev">  &lt; </button>
        //         <button id="next"> &gt; </button>
        //     </div>
        //     <ul class="dots">
        //         <li class="active"></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //     </ul>
        // </div>
    )
}
