import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


const marks = [
    {
        value: -50,
        label: '-50%',
    },
    {
        value: -25,
        label: '-25%',
    },
    {
        value: 0,
        label: '0%',
    },
    {
        value: 25,
        label: '25%',
    },
    {
        value: 50,
        label: '50%',
    },
];

function valuetext(value: number) {
    return `${value}°C`;
}

export default function SliderDropdown({arrowStyles}: any) {
    return (
        <Box className="custom-slider bg-white position-absolute py-4 px-8" sx={{ width: 300, position: 'absolute' }}>
            <Slider
                aria-label="Percentages"
                defaultValue={0} min={-50} max={50}
                getAriaValueText={valuetext}
                valueLabelDisplay="auto"
                marks={marks}
            />
        </Box>
    );
}