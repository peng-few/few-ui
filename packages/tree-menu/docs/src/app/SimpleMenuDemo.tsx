import { Button } from '@pengfew/base-ui';
import { TreeMenu } from '@pengfew/tree-menu';
import { useState } from 'react';
import Industries from './Industries.json';
const SimpleMenuDemo = () => {
  const [visible, setVisible] = useState(true);
  const [option, setOption] = useState(Industries);

  return (
    <>
      <h1>一般的三層選單</h1>
      <Button size="lg" onClick={() => setVisible(true)}>
        打開選單
      </Button>
      <TreeMenu
        visible={visible}
        onClose={() => setVisible(false)}
        options={option}
        title="行業類別"
      />
    </>
  );
};

export default SimpleMenuDemo;
