# My React portfolio 
Welcome to my personal React portfolio.
Current WIP : "read more" link needs to be sorted out.

## Deployment
[Portfolio](https://jbergportfolio.netlify.com/)

## Installation guide

```
npm run build
```

## Code example of the slider class in hello.jsx

```JavaScript
class CitiesSlider extends Component {
        constructor(props) {
          super(props);
          
          this.IMAGE_PARTS = 4;
          
          this.changeTO = null;
          this.AUTOCHANGE_TIME = 4000;
          
          this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
        }
        
        componentWillUnmount() {
          window.clearTimeout(this.changeTO);
        }
        
        componentDidMount() {
          this.runAutochangeTO();
          setTimeout(() => {
            this.setState({ activeSlide: 0, sliderReady: true });
          }, 0);
        }
        
        runAutochangeTO() {
          this.changeTO = setTimeout(() => {
            this.changeSlides(1);
            this.runAutochangeTO();
          }, this.AUTOCHANGE_TIME);
        }
        
        changeSlides(change) {
          window.clearTimeout(this.changeTO);
          const { length } = this.props.slides;
          const prevSlide = this.state.activeSlide;
          let activeSlide = prevSlide + change;
          if (activeSlide < 0) activeSlide = length - 1;
          if (activeSlide >= length) activeSlide = 0;
          this.setState({ activeSlide, prevSlide });
        }
```
## Built using
- [REACT](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/docs/what-is-tailwind/)

## Author 
[Joakim Berglind](https://github.com/nevroje)

## Acknowledgments
The coach team at CraftAcademy for making this possible.
