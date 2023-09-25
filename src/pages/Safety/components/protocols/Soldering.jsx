import React from 'react'
import ArticleBlock from '../../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../../components/common/pageComponents/typography/ParagraphBlock'
import BulletPoint from '../../../../components/common/pageComponents/typography/BulletPoint'

const Soldering = () => {
  return (
    <ArticleBlock>
    <BlockTitle>Soldering</BlockTitle>
    – the use of the solder iron and lead wire to create an electrical connection. 
    <ParagraphBlock>
      <BulletPoint>Inspect before use.</BulletPoint>          
      <BulletPoint>Remove defective iron from workstation if required.</BulletPoint>
      <BulletPoint>Wear ESD-safe and heat resistant gloves, safety glasses, face mask, and heel grounder.</BulletPoint>
      <BulletPoint>Keep solder iron at appropriate temperature.</BulletPoint>
      <BulletPoint>Utilize ventilation system while soldering.</BulletPoint>
      <BulletPoint>Dispose of worn out solder tips.</BulletPoint>
      <BulletPoint>Do not leave unattended. </BulletPoint>
      <BulletPoint> Turn off after use.</BulletPoint>
    </ParagraphBlock>
  </ArticleBlock>
  )
}

export default Soldering