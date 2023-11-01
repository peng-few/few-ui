import { Button } from '@pengfew/base-ui';
import { TreeMenu } from '@pengfew/tree-menu';
import { useState } from 'react';
import Industries from './Industries.json';
const SimpleMenuDemo = () => {
  const [visible, setVisible] = useState(true);
  const [option] = useState(Industries);
  const [value, setValue] = useState<string[]>();
  const [selectedLabels, setSelectedLabels] = useState<string[]>();
  const valueChange = (val: string[], labels: string[]) => {
    setValue(val);
    setSelectedLabels(labels);
  };

  return (
    <>
      <h1>三層選單(多選)</h1>
      <p>已選擇: {selectedLabels?.join('、')}</p>
      <p>選擇值: {value?.join('、')}</p>
      <Button variant="filled" size="lg" onClick={() => setVisible(true)}>
        打開選單
      </Button>
      <TreeMenu
        visible={visible}
        onClose={() => setVisible(false)}
        options={option}
        title="行業類別"
        value={value}
        onChange={valueChange}
      />
    </>
  );
};

export default SimpleMenuDemo;
