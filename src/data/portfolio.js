import cstkImage from '../../assets/images/cstkSite.png';
import d3HeatMap from '../../assets/images/d3HeatMap.png';
import d3Scatterplot from '../../assets/images/d3Scatterplot.png';
import d3BarChart from '../../assets/images/d3BarChart.png';

export default [
    {
        id: 1,
        title: "CSTK",
        link: 'http://www.targetedkilling.org',
        description: "This is the working version of the CSTK website, built with Angularjs, Express, and MongoDB",
        image: cstkImage,
        status: "Complete",
        codeSample: 'https://gist.github.com/mattfricker/6092c2ae2b37ea7827ec'
    },
    {
        id: 2,
        title: "D3 Heat Map",
        link: 'http://codepen.io/mq9_reaper/full/XdaXLy/',
        description: "A heat map built with D3 that shows global temperatures between 1753 and 2015 ",
        image: d3HeatMap,
        status: "Completed",
        codeSample: "http://codepen.io/mq9_reaper/pen/XdaXLy"
    },
    {
        id: 3,
        title: "D3 Scatterplot",
        link: 'http://codepen.io/mq9_reaper/full/NNgxPR/',
        description: "A scatterplot visualization built with D3 that shows the fastest times up Alpe d'Huez and whether the cyclist has doping allegations.",
        image: d3Scatterplot,
        status: "Completed",
        codeSample: "http://codepen.io/mq9_reaper/pen/NNgxPR"
    },
    {
        id: 4,
        title: "D3 Bar Chart",
        link: 'http://codepen.io/mq9_reaper/full/ZWKrMG/',
        description: "A bar chart built with D3 that shows the monthly GDP of the U.S. from 1947.",
        image: d3BarChart,
        status: "Completed",
        codeSample: "http://codepen.io/mq9_reaper/pen/ZWKrMG"
    }
]