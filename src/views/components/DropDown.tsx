import { useState, useEffect } from 'react';
import { StyledInput, DropDownInput } from 'views/components';

export const DropDown = (props: {
  value: string | string[];
  placeholder?: string;
  data: string[][] | null;
  onClick: (id: string, name: string) => void;
  multi?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const [visibleValue, setVisibleValue] = useState<string>('');
  const { value, placeholder, data, onClick } = props;

  useEffect(() => {
    const isString = typeof value === 'string';
    let matchData: string[] = [];
    if (isString) {
      matchData = data
        ? data
            .filter((item) => {
              return item[0] === value;
            })
            .map((item) => item[1])
        : [];
    }

    if (data && !isString) {
      for (let i = 0; i < data.length; i++) {
        const itemId = data[i][0].trim();
        const itemName = data[i][1].trim();
        for (let i2 = 0; i2 < value.length; i2++) {
          if (itemId === value[i2]) {
            matchData.push(itemName);
          }
        }
      }
    }

    setVisibleValue(matchData.join(', '));
  }, [value, data]);
  return (
    <div onClick={() => setOpen(open ? false : true)}>
      <StyledInput
        value={visibleValue}
        name=""
        placeholder={placeholder || ''}
        onChange={() => null}
      />
      <StyledInput
        value={value}
        name="organisation"
        placeholder={placeholder || ''}
        onChange={(e: any) => null}
        type="hidden"
      />
      <div style={{ maxHeight: 200, overflow: 'auto' }}>
        {data &&
          open &&
          data.map((item: any, index: number) => (
            <DropDownInput
              key={`org_${index}`}
              value={item[0]}
              name={item[1]}
              onClick={() => {
                setVisibleValue(item[1]);
                onClick(item[0], item[1]);
              }}
            />
          ))}
      </div>
    </div>
  );
};
