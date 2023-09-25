import React from 'react'
import ArticleBlock from '../../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../../components/common/pageComponents/typography/BlockTitle'
import LetteredBulletPoint from '../../../../components/common/pageComponents/typography/LetteredBulletPoint'
import RomanNumeralBulletPoint from '../../../../components/common/pageComponents/typography/RomanNumeralBulletPoint'

const MedicalAttention = () => {
  return (
        <ArticleBlock>
            <BlockTitle>
                Medical Attention
            </BlockTitle>
            <LetteredBulletPoint letter={'a'}>Report any injuries to the closet supervisor.</LetteredBulletPoint>
            <LetteredBulletPoint letter={'b'}>Assist co-worker with first aid if needed.
                <RomanNumeralBulletPoint numeral={'i'}>First aid kit is located on top of blue storage shelf.</RomanNumeralBulletPoint>
                <RomanNumeralBulletPoint numeral={'ii'}>Routinely check and refill first aid kit’s supply.</RomanNumeralBulletPoint>
            </LetteredBulletPoint>
            <LetteredBulletPoint letter={'c'}>Call medical personnel if needed. </LetteredBulletPoint>
        </ArticleBlock>
    )
}

export default MedicalAttention