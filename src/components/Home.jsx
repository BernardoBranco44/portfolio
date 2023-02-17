import { useContext } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import { NavigationContext } from "../App";

export default function Home() {

  const {projectsRef, aboutRef, contactRef} = useContext(NavigationContext)

  return (
    <>
      <main className="container">
        <header className="presentation">
          <div className="pres">
            <h1>Hi, my name is</h1>
            <svg width="911" height="304" viewBox="0 0 911 304" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path1" d="M2 2C4.42544 4.91052 5.21825 8.65639 6.22222 12.2222C10.0454 25.801 12.6704 39.2341 13.8889 53.3333C17.605 96.3343 20.0228 140.285 18.7778 183.444C17.8236 216.524 16 249.619 16 282.722C16 285.417 13.9204 300.46 17 302" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path2" d="M11 6C17.5676 6 23.9919 4.91159 30.6667 5C42.6204 5.15832 54.0689 7.6131 65.7778 9.77777C76.1898 11.7027 87.3854 12.6126 97.3333 16.4444C108.655 20.8053 118.429 27.3277 122.556 39.2222C125.943 48.9847 124.887 63.7926 123.778 74C123.106 80.1848 120.289 84.8547 117.444 90.2222C114.508 95.7636 112.648 101.741 108.778 106.778C101.116 116.75 89.4694 122.385 78.4444 127.778C69.6452 132.082 59.6845 134.433 50 135.778C43.3187 136.706 36.2403 139 29.5 139C28.6215 139 23.0444 139 25.8889 139C43.9523 139 60.8139 141.371 78.5 144.944C91.8862 147.649 110.612 150.282 121.056 160.111C129.734 168.279 132.889 180.391 132.889 192.111C132.889 208.894 126.52 224.215 120.5 239.556C115.25 252.934 109.24 267.99 97.3889 276.944C85.6318 285.828 68.5513 290.783 54.6111 294.944C43.4299 298.282 32.2906 298.742 21 301" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path3" d="M102 271C102.48 283.48 117.617 291.474 128.667 291.944C141.611 292.495 154.776 291.018 167.222 287.333C180.351 283.447 197.088 277.774 207.389 268.389C213.318 262.987 227.068 240.862 215 235C210.753 232.937 197.648 232.162 194.222 236.444C185.829 246.935 186.062 260.079 187.056 273C187.997 285.233 197.035 288.936 207.056 292.944C219.156 297.785 229.252 294.024 239.111 286.333C256.088 273.091 264 253.223 264 232.111C264 220.898 260.14 210.024 248.778 206.778C245.228 205.763 230.711 205.242 234.222 213.222C235.563 216.27 245.821 215.909 248.778 216C258.004 216.284 267.218 217.552 276.444 217.944C285.346 218.323 294.714 216.771 303.556 215.778C308.201 215.256 320.882 210.125 317.333 213.167C313.853 216.15 312.033 222.337 310.556 226.5C308.244 233.013 305.696 238.771 304 245.556C301.725 254.655 294.849 265.404 303 273.556C309.16 279.715 318.237 282 327 282" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path4" d="M327 282C327.27 284.16 331.578 282.637 332.778 282.222C335.931 281.131 338.344 277.858 338.944 274.556C340.38 266.659 345.121 258.764 353.5 257C356.584 256.351 358.621 254.199 362 254C365.99 253.765 365.348 253.348 369 257C376.221 264.221 378.019 273.604 381.5 282.5C382.894 286.063 383.147 291.751 385.5 286C387.835 280.293 389.341 274.629 391.222 268.778C393.622 261.312 395.821 261 403.222 261C412.457 261 418.283 260.967 423 269.222C425.742 274.021 427.906 284 435 284" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path5" d="M436 285C439.728 285 445.048 285.013 447.444 281.778C451.272 276.61 456.258 275.783 461.056 271.944C468.143 266.274 479 258.741 479 248.5C479 243.164 480.298 233.347 478.778 245C477.654 253.619 476 262.131 476 270.889C476 275.176 474.028 285.116 477.778 288C485.769 294.147 499.15 287.2 506.333 283.5C517.005 278.003 526.237 260.76 517.556 250.5C506.658 237.621 485.59 240.352 471 244" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path6" d="M520 262C526.475 262 528.908 273.417 536.222 274.778C549.65 277.276 563.355 266.694 572.778 258.667C586.743 246.771 599.286 230.221 597.778 210.778C597.034 201.186 592.853 192.056 585 186.222C577.896 180.945 568.217 193.664 572.444 195.778C577.143 198.127 588.096 196 593.222 196C606.999 196 622.048 193.593 635.5 190.556C639.319 189.693 643.18 189.095 647 188.222C650.021 187.532 646.643 191.118 646.056 192C641.627 198.643 637.891 206.355 635.556 214C631.219 228.193 628.547 243.077 636.444 256C640.892 263.278 647.644 263 655.5 263C660.419 263 678 257.363 678 252" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path7" d="M676 255C679.611 255 680.813 250.057 682.111 247.389C685.394 240.641 690.089 234.279 694.778 228.444C698.065 224.354 700.104 220.024 701.5 215C702.33 212.012 702.088 210.617 702 214.667C701.727 227.214 696.977 241.039 701 253.556C704.498 264.439 719.024 265.567 728.444 263.556C756.081 257.656 750.912 226.291 730 216.222C725.893 214.245 720.866 214.576 716.5 213.444C712.767 212.477 708.9 211.331 705 212.222C699.923 213.383 699 214.815 699 220" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path8" d="M744 253C747.793 252.579 747.676 243.084 748.556 240.444C751.138 232.696 752.632 224.629 755 216.778C758.219 206.106 760.175 195.325 762.444 184.389C765.177 171.223 768 158.606 768 145.111C768 134.108 768.469 119.062 773.5 109C775.244 105.512 775.578 101.288 777.222 98C777.522 97.3999 776.869 103.261 776 105" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path9" d="M747 247C761.306 247 771.328 243.023 782 232.944C784.9 230.206 809.828 204.414 807 203" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            <path id="path10" d="M807 203C807 212.619 805.553 223.106 810 232C812.959 237.919 829.537 236.803 834.111 234.389C844.103 229.115 849.586 221.048 851.222 209.778C852.357 201.963 853.934 190.69 850 183.444C846.878 177.694 834.333 176.405 828.556 178.056C823.687 179.447 814.545 182.591 813 188C812.464 189.876 806.901 202.805 811.778 203C814.653 203.115 816.948 204.38 820 203.944C826.624 202.998 832.444 200.139 839 198.5C850.933 195.517 862.001 189.909 873.222 185C885.902 179.452 896.693 171.153 909 165" stroke="white" strokeWidth="6" strokeLinecap="round"/>
            </svg>
            <p>I'm a fullstack developer. Focused on learning and becoming the best
            version of myself.</p>
          </div>
        </header>
          <section ref={aboutRef} className="about">
            <div>
              <About />
            </div>
          </section>
        <section ref={projectsRef} className="projects">
          <Link to="/projects/materialised">
            <div className="project-image">
              <div>
                <p>Materialised</p>
                <p>UberEats for building materials</p>
              </div>
            </div>
          </Link>
          <Link to="/projects/ecommerce">
            <div className="project-image">
              <div>
                <p>El Pollo Loco</p>
                <p>Random assortment</p>
              </div>
            </div>
          </Link>
          <Link to="/projects/quiz">
            <div className="project-image">
              <div>
                <p>Quiz</p>
                <p>Can you answer the 5 questions?</p>
              </div>
            </div>
          </Link>
          <Link to="/projects/tenzies">
            <div className="project-image">
              <div>
                <p>Tenzies</p>
                <p>Classic childish fun</p>
              </div>
            </div>
          </Link>
        </section>
      </main>

    </>
  )
}
