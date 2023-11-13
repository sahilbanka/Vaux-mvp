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
    return `${value}%`;
}

export default function SliderDropdown({positionStyles, sliderValue, sliderChanged}: {positionStyles: string, sliderValue: number, sliderChanged: (value: number) => void}) {
    return (
        <Box className={`custom-slider z-[1] bg-white position-absolute py-4 px-8 border border-gray-200 rounded-xmd shadow-md ${positionStyles}`} sx={{ width: 300, position: 'absolute' }}>
            <Slider
                aria-label="Percentages"
                value={sliderValue ?? 0} defaultValue={0} min={-50} max={50}
                getAriaValueText={valuetext} autoFocus 
                valueLabelDisplay="auto"
                marks={marks} onChangeCommitted={(event, value) => sliderChanged(value as number)}
            />
        </Box>
    );
}