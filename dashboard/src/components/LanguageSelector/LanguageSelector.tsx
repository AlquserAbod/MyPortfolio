// components/LanguageSelector.tsx

import React from 'react';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

interface LanguageSelectorProps {
    language: string;
    setLanguage: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
    const handleChange = (event: SelectChangeEvent<string>) => {
     setLanguage(event.target.value as string);
    };

    return (
        <FormControl variant="outlined" size="medium" fullWidth>
            <InputLabel id="language-selector-label">Language Project</InputLabel>
            <Select
                labelId="language-selector-label"
                value={language}
                onChange={handleChange}
                label="Language Project"
            >
                <MenuItem value="en">English</MenuItem>
                <MenuItem value="tr">Turkish</MenuItem>
                <MenuItem value="ar">Arabic</MenuItem>
            </Select>
        </FormControl>
    );
};

export default LanguageSelector;
