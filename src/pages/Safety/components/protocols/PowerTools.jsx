import React from 'react'
import ArticleBlock from '../../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../../components/common/pageComponents/typography/ParagraphBlock'
import BulletPoint from '../../../../components/common/pageComponents/typography/BulletPoint'

const PowerTools = () => {
  return (
    <ArticleBlock>
        <BlockTitle>Power Tools</BlockTitle>
        – tools requiring an electrical source e.g. drivers, buffers, soldering iron, rivet gun, drill, air
compressor, and the drill press. 
        <ParagraphBlock>
        <BulletPoint>Inspect before use.</BulletPoint>
        <BulletPoint>Tag any defective tools and remove them from the line.</BulletPoint>
        <BulletPoint>Wear gloves and safety glasses while operating power tools.</BulletPoint>
        <BulletPoint>Wear earmuffs while using the air compressor and drill press</BulletPoint>
        <BulletPoint>Do not run over or bend the air hose</BulletPoint>
        <BulletPoint> Return tools to assigned area.</BulletPoint>
        <BulletPoint> Turn off after use and properly manage cables. </BulletPoint>
        </ParagraphBlock>
    </ArticleBlock>
  )
}

export default PowerTools