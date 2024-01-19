import React from 'react';
import {motion} from "framer-motion";
import { SvgHoc } from '../SvgHOC';

const RainVariant = {
    initial: {
        opacity: 0,
        y: 0,
        fill: 'transparent'
    },
    animate:
        {
            fill: 'aqua',
            opacity: 1,
            y: [0, 100],
            transition: {
                default: {
                    duration: 2,
                },
                fill: {
                    repeat: 'loop',
                },
                y: {
                    duration: 10,
                    ease:'easeInOut',
                    repeat: 'loop',
                },
            }
        }
}

function Rainy({width = '1525px', height = '1525px', animations}) {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width={width}
                 height={height}
                 viewBox="0 0 2048 2048">

                <g>
                    <metadata id="CorelCorpID_0Corel-Layer"/>
                    <motion.path
                        variants={RainVariant}
                        initial={'initial'}
                        animate={'animate'}
                        d="M395.602 605.148c-4.9252,-2.10354 -10.4268,-3.24213 -16.089,-3.20197 -5.72481,-0.0389764 -11.1095,1.11378 -15.9484,3.1878 -4.67008,2.00079 -9.01418,4.97599 -12.7583,8.6067l-0.0011811 -0.0011811c-1.50473,1.4563 -2.86418,2.90079 -4.04646,4.40433 -1.10315,1.40079 -2.2252,3.06851 -3.40748,5.12953l-0.0354331 -0.0200788 -56.0079 94.4505 -0.122835 0.244488 -4.82363 8.29725 -0.737008 1.35c-3.82796,7.39253 -6.84804,15.2988 -8.91969,23.6055 -1.95354,7.82953 -3.02599,16.1764 -3.0874,24.9508l0 0.122835c0.0425197,14.6835 3.05906,28.6748 8.45906,41.3811 5.65512,13.3051 13.8295,25.1941 23.8677,35.0055l1.22835 1.2248 0.0779528 0.068504 0.0212599 -0.022441c9.92009,9.39922 21.5504,16.9595 34.337,22.1575 12.6898,5.15788 26.7508,8.02796 41.6457,8.09292l0.122835 0c14.8358,0.0177165 28.924,-2.81339 41.7237,-7.95709 13.4658,-5.41063 25.5673,-13.3429 35.687,-23.191 10.187,-9.92835 18.4146,-21.8516 24.0709,-35.1662 5.4189,-12.7547 8.40946,-26.7591 8.4189,-41.4662 0.0248032,-8.77205 -1.01339,-17.1709 -2.98701,-25.1398 -2.11181,-8.52638 -5.1626,-16.5036 -9.01182,-23.8772l-0.737008 -1.10433 -4.62756 -8.01969 -0.122835 -0.367323 -55.8745 -94.5473 -0.0543308 0.0330709c-1.08898,-1.9004 -2.28425,-3.62362 -3.51024,-5.17087 -1.82599,-2.30315 -3.04961,-3.68386 -3.86457,-4.47874l-0.0472441 0.0472441c-3.66969,-3.65551 -8.07284,-6.60119 -12.8386,-8.62914z"/>
                    <motion.path  variants={RainVariant}
                        initial={'initial'}
                        animate={'animate'} fill={'#FFFFFE'}
                          d="M992.887 259.199c-4.90985,-2.10118 -10.3925,-3.23977 -16.0358,-3.19843 -5.70591,-0.0401575 -11.074,1.11142 -15.8965,3.18425 -4.65591,2.00079 -8.98465,4.97244 -12.7158,8.59843l-0.0011811 -0.0011811c-1.5,1.45512 -2.85591,2.89961 -4.03229,4.40079 -1.10079,1.39961 -2.22047,3.06733 -3.39803,5.12599l-0.0354331 -0.0212599 -55.8213 94.369 -0.122835 0.244488 -4.80709 8.28898 -0.735827 1.34882c-3.81378,7.38662 -6.8256,15.2858 -8.88898,23.5855 -1.94764,7.82245 -3.01536,16.1622 -3.07677,24.9284l0 0.122835c0.0413386,14.6705 3.04725,28.65 8.43072,41.3457 5.63622,13.2933 13.7847,25.1717 23.7874,34.9748l1.2248 1.2248 0.0779528 0.068504 0.0212599 -0.0236221c9.88702,9.39213 21.4795,16.9453 34.2236,22.1386 12.6473,5.15315 26.6634,8.02087 41.5075,8.08583l0.122835 0c14.7862,0.0177165 28.8284,-2.81103 41.5855,-7.95001 13.4209,-5.40709 25.4835,-13.3323 35.5689,-23.1709 10.1528,-9.91891 18.3543,-21.8327 23.9918,-35.1355 5.40119,-12.7441 8.38111,-26.7355 8.39174,-41.4307 0.0236221,-8.76497 -1.01102,-17.1555 -2.97756,-25.1173 -2.10473,-8.5193 -5.14607,-16.4894 -8.98229,-23.8559l-0.734646 -1.10315 -4.61221 -8.01379 -0.122835 -0.366142 -55.689 -94.4658 -0.0543308 0.0330709c-1.08543,-1.89803 -2.27717,-3.62008 -3.49843,-5.16615 -1.82126,-2.30079 -3.04016,-3.68032 -3.85276,-4.4752l-0.046063 0.0484252c-3.65788,-3.65315 -8.04686,-6.59646 -12.7961,-8.62205z"/>
                    <motion.path  variants={RainVariant}
                        initial={'initial'}
                        animate={'animate'} fill={'#FFFFFE'}
                          d="M694.556 290.916c-5.53819,-2.31496 -11.6941,-3.56575 -18.013,-3.50315 -6.44174,-0.0649607 -12.489,1.20236 -17.9138,3.48189l0 0.122835c-5.53701,2.32914 -10.5461,5.66575 -14.7295,9.64961l-0.00236221 -0.00236221c-1.62047,1.53898 -3.19961,3.21024 -4.7752,5.17441 -1.46811,1.83189 -2.86299,3.8315 -4.19055,6.09922l-0.0425197 -0.0248032 -89.7367 148.625 -0.122835 0.245669 -7.72796 13.0571 -0.737008 1.35c-5.58071,10.5839 -9.93662,21.7146 -12.8575,33.2126 -2.8004,11.0268 -4.33583,22.8295 -4.42559,35.2973l0 0.122835c0.0602363,20.674 4.40552,40.4244 12.1913,58.4126 8.09646,18.7075 19.813,35.4355 34.2083,49.2567l0.277559 0.252756c14.3693,13.7587 31.5638,24.8646 50.7107,32.5087 18.3213,7.31339 38.3965,11.3811 59.4331,11.4709l0.122835 0c21.2079,0.0236221 41.3174,-3.93425 59.5571,-11.1343 19.2307,-7.59095 36.5339,-18.7335 51.0213,-32.5796l0.122835 -0.121654c14.5099,-13.8898 26.2453,-30.6095 34.3406,-49.3193 7.80709,-18.0449 12.1122,-37.8166 12.1264,-58.5473 0.0377953,-12.3945 -1.44567,-24.215 -4.26615,-35.3965 -3,-11.8973 -7.40316,-23.1579 -13.0039,-33.6957l-0.737008 -1.10433 -7.41379 -12.6201 -0.122835 -0.246851 -89.5264 -148.776 -0.00590552 0.00354331c-1.35354,-2.39646 -2.78504,-4.46575 -4.2189,-6.24449 -1.60512,-1.99134 -3.2374,-3.71575 -4.75512,-5.17087l-0.0531496 0.0543308c-4.33701,-4.29331 -9.39213,-7.67363 -14.7343,-9.91064z"/>
                    <motion.path  variants={RainVariant}
                        initial={'initial'}
                        animate={'animate'} fill={'#FFFFFE'}
                          d="M395.492 259.206c-4.92166,-2.10591 -10.4173,-3.24685 -16.0748,-3.20551 -5.72008,-0.0401575 -11.1012,1.11496 -15.9354,3.19134 -4.66654,2.00433 -9.00709,4.98426 -12.7465,8.62087l-0.0011811 -0.0011811c-1.50473,1.45866 -2.86181,2.90551 -4.04292,4.41024 -1.10315,1.40315 -2.22402,3.07441 -3.40512,5.13898l-0.0366142 -0.0212599 -55.9583 94.5993 -0.122835 0.245669 -4.8189 8.31024 -0.737008 1.35118c-3.82441,7.40552 -6.84213,15.3225 -8.91142,23.6433 -1.95236,7.84134 -3.02244,16.2012 -3.08504,24.9898l0 0.122835c0.0425197,14.7059 3.05551,28.7197 8.45198,41.4473 5.6504,13.3252 13.8177,25.2331 23.8465,35.0599l1.22835 1.22717 0.0767717 0.068504 0.0212599 -0.0236221c9.91182,9.41576 21.5327,16.9878 34.3075,22.1929 12.678,5.16615 26.7284,8.04095 41.6103,8.10591l0.122835 0c14.8228,0.0177165 28.8992,-2.81693 41.687,-7.97008 13.4528,-5.4189 25.5449,-13.3642 35.6551,-23.2264 10.1787,-9.94371 18.3992,-21.8858 24.0508,-35.2229 5.41418,-12.7736 8.40119,-26.8004 8.41182,-41.5311 0.0248032,-8.78623 -1.01339,-17.1969 -2.98465,-25.1788 -2.10945,-8.53938 -5.15788,-16.5295 -9.00355,-23.915l-0.737008 -1.10551 -4.62402 -8.03268 -0.122835 -0.367323 -55.8248 -94.6961 -0.0543308 0.0318898c-1.08898,-1.90276 -2.28307,-3.62835 -3.5067,-5.17914 -1.82599,-2.30551 -3.04843,-3.68859 -3.86221,-4.48465l-0.0472441 0.0472441c-3.66614,-3.66142 -8.06575,-6.61182 -12.8268,-8.64331z"/>
                    <path fill={'#FFFFFE'}
                          d="M1227 1099.49c-20.674,14.5441 -36.8209,35.1685 -45.9,59.2229l-58.6465 0c-9.08268,-24.0532 -25.2307,-44.6788 -45.9071,-59.2241 -19.9914,-14.0622 -44.1449,-22.4091 -70.1469,-22.6299 -26.9055,-0.138189 -51.8244,8.1756 -72.2634,22.4658 -21.0614,14.7225 -37.4362,35.8429 -46.3973,60.6414l-59.1378 -0.49252c-8.58426,-24.9142 -24.6154,-46.2662 -45.4311,-61.3252 -20.2536,-14.6528 -44.9764,-23.3599 -71.7107,-23.6162 -22.1563,-0.111024 -42.952,5.52284 -60.9993,15.5327 -18.8103,10.4327 -34.6689,25.5768 -46.0229,43.8933l-57.5434 -21.5953c6.3567,-38.2229 16.1941,-75.1997 29.1567,-110.582 13.1847,-35.9859 29.7378,-70.5638 49.2744,-103.352l0.368504 -0.612993 16.2354 -25.6937 0.490158 -0.735827c56.0315,-83.8654 132.071,-153.111 221.219,-200.906 85.9501,-46.0784 184.061,-72.1524 288.138,-72.0886 104.075,-0.0637796 202.187,26.0103 288.133,72.0898 89.1473,47.7933 165.187,117.039 221.218,200.904l0.488977 0.735827 16.2366 25.6937 0.368504 0.612993c19.539,32.7933 36.0945,67.376 49.2804,103.365 12.9378,35.3114 22.7729,72.3213 29.1496,110.693l-57.5422 21.4713c-11.3551,-18.3165 -27.2126,-33.4607 -46.0229,-43.8933 -18.0484,-10.0099 -38.8453,-15.6437 -61.0016,-15.5327 -26.7319,0.256299 -51.4536,8.96339 -71.7083,23.6173 -20.8181,15.0579 -36.8481,36.4111 -45.4323,61.3241l-59.1378 0.49252c-8.96103,-24.7984 -25.3358,-45.9189 -46.3949,-60.6414 -20.4402,-14.2902 -45.3591,-22.604 -72.2646,-22.4658 -26.002,0.220866 -50.1591,8.5689 -70.1469,22.6311z"/>
                    <path fill={'#FFFFFE'}
                          d="M1072.5 1707.88c0.537402,4.63229 2.42008,9.11457 5.57363,12.8339 3.11575,3.67677 7.20827,6.24686 11.687,7.53544 4.5378,1.3063 9.45591,1.30276 14.1425,-0.184252 4.54607,-1.44213 8.44016,-4.22481 11.3091,-7.83898 2.64213,-3.32362 4.02638,-7.41379 4.73741,-11.5807l0.0236221 -1109.25 32.0587 -70.7493 31.8532 70.5886 0.210236 1113.08c-1.56614,17.5382 -9.38032,33.8008 -19.8059,46.9276 -10.4882,13.2071 -24.7618,23.387 -41.491,28.6949 -16.6748,5.28544 -34.1197,5.30788 -50.2146,0.675591 -16.1599,-4.65 -30.9898,-13.9949 -42.3603,-27.4087 -11.3398,-13.3795 -18.111,-29.5158 -20.0516,-46.2095 -1.24252,-10.6902 -0.504331,-21.6095 2.28189,-32.1768 6.06851,-24.2693 38.5276,-35.9918 55.1823,-20.3669 18.3992,17.2618 0.797245,28.9618 4.86378,45.4288z"/>
                </g>
            </svg>

        </>
    );
}

export default SvgHoc(Rainy);