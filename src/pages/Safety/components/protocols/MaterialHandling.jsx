import React from 'react'
import ArticleBlock from '../../../../components/common/pageComponents/layout/ArticleBlock'
import BlockTitle from '../../../../components/common/pageComponents/typography/BlockTitle'
import ParagraphBlock from '../../../../components/common/pageComponents/typography/ParagraphBlock'
import BulletPoint from '../../../../components/common/pageComponents/typography/BulletPoint'
import { Typography } from '@mui/material'
import LetteredBulletPoint from '../../../../components/common/pageComponents/typography/LetteredBulletPoint'
import RomanNumeralBulletPoint from '../../../../components/common/pageComponents/typography/RomanNumeralBulletPoint'

const MaterialHandling = () => {
  return (
    <ArticleBlock>
        <BlockTitle>Material Handling</BlockTitle>
        – the manipulation of raw materials for production.
        <ParagraphBlock>
            <LetteredBulletPoint letter={'a'}>Wear gloves during assembly of products including boxes.</LetteredBulletPoint>
            <LetteredBulletPoint letter={'b'}>Wear gloves moving wooden pallets. </LetteredBulletPoint>
            <LetteredBulletPoint letter={'c'}>Do not stack materials on a cart higher than eye level so that you do not have to bend to the side to
see around the load. Employees should be able to easily see over the top of the load.</LetteredBulletPoint>
            <LetteredBulletPoint letter={'d'}>To prevent electrical charge while handling circuit boards wear ESD-safe gloves.
                <RomanNumeralBulletPoint numeral={'i'}>Wear gloves and safety glasses while using cleaning agents, flux, and degreaser.</RomanNumeralBulletPoint>
                <RomanNumeralBulletPoint numeral={'ii'}>Store flammable chemicals like flux in designated closed containers.</RomanNumeralBulletPoint>
            </LetteredBulletPoint>
            <LetteredBulletPoint letter={'e'}>Chemicals
                <RomanNumeralBulletPoint numeral={'i'}>Wear gloves and safety glasses while using cleaning agents, flux, and degreaser</RomanNumeralBulletPoint>
                <RomanNumeralBulletPoint numeral={'ii'}> Store flammable chemicals like flux in designated closed containers.</RomanNumeralBulletPoint>
            </LetteredBulletPoint>
        </ParagraphBlock>
    </ArticleBlock>
    )
}

export default MaterialHandling