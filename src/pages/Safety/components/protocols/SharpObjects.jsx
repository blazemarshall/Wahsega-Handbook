import React from 'react'
import ArticleBlock from '../../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../../components/common/pageComponents/typography/ParagraphBlock'
import BulletPoint from '../../../../components/common/pageComponents/typography/BulletPoint'

const SharpObjects = () => {
  return (
    <ArticleBlock>
        <BlockTitle>Sharp Objects</BlockTitle>
             – bladed tools like knives, box cutters, cable cutters, and tape guns.
        <ParagraphBlock>
            <BulletPoint>Inspect before use.</BulletPoint>
            <BulletPoint>Replace dull blades and properly dispose of sharp objects in specialized bin.</BulletPoint>
            <BulletPoint>Wear personal cut resistance gloves.</BulletPoint>
            <BulletPoint>Retract box cutters after use.</BulletPoint>
        </ParagraphBlock>
    </ArticleBlock>
  )
}

export default SharpObjects