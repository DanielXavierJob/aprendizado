import { Controller, useFormContext } from 'react-hook-form';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import MenuItem from '@mui/material/MenuItem';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

// ----------------------------------------------------------------------
interface RHFSelect extends TextFieldProps<"outlined"> {
  name: string;
  native?: boolean;
  minWidth?: number,
  helperText?: React.ReactNode;
  children: React.ReactNode;
  PaperPropsSx?: any;
  maxHeight?: number;
  fullWidth?: boolean;
}
export function RHFSelectMUI({ name, label, fullWidth, options, onChange }: { name: string, label: string, fullWidth?: boolean, options: { label: string, value: string, selected?: boolean }[], onChange?: (value: string) => void }) {
  const { control } = useFormContext();
    
  return <Controller
    name={name}
    control={control}
    render={(({ field, fieldState: { error } }) => (
      <FormControl fullWidth error={error ? true : false}>
        <InputLabel id={`label-switch-input-${name}`}>{label}</InputLabel>
        <Select
          {...field}
          labelId={`label-switch-input-${name}`}
          id="simple-select-input"
          value={field.value || ''}
          onChange={(value) => {
            field.onChange(value.target.value)
            onChange && onChange(value.target.value)
          }}
          label={label}
          error={!!error}
          fullWidth={fullWidth ?? false}
        >
          {options.map((item, index) => <MenuItem value={item.value} key={index} selected={item.selected}>{item.label}</MenuItem>)}
        </Select>
        {error && <FormHelperText>{error.message}</FormHelperText>}
      </FormControl>
    ))}
  />
}

export function RHFSelect({
  name,
  native,
  maxHeight = 220,
  minWidth,
  helperText,
  children,
  PaperPropsSx,
  fullWidth,
  ...other
}: RHFSelect) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          select
          value={field.value || ''}
          onChange={(value) => field.onChange(value.target.value)}
          fullWidth={fullWidth ?? false}
          SelectProps={{
            native,
            MenuProps: {
              PaperProps: {
                sx: {
                  ...(!native && {
                    maxHeight: typeof maxHeight === 'number' ? maxHeight : 'unset',
                    minWidth: typeof minWidth === 'number' ? minWidth : '100%',
                  }),
                  ...PaperPropsSx,
                },
              },
            },
            sx: { textTransform: 'capitalize' },
          }}
          error={!!error}
          helperText={error ? error?.message : helperText}
          {...other}
        >
          {children}
        </TextField>
      )}
    />
  );
}
