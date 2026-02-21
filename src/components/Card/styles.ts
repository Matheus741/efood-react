import styled from 'styled-components'
import { colors } from '../../styles/colors'
import estrela from '../../assets/images/estrela.svg'

const CARD_W = 472
const CARD_H = 398

const IMG_H = 217

const BADGE_HEIGHT = 26
const BADGE_GAP = 8
const BADGES_OFFSET_TOP = 16
const BADGES_OFFSET_RIGHT = 16

const BADGE_W_DESTAQUE = 121
const BADGE_W_CATEGORIA = 61

const CONTENT_PAD_X = 8
const CONTENT_PAD_Y = 12

const TITLE_FS = 18
const TITLE_MB = 8
const RATING_FS = 18
const RATING_GAP = 6
const STAR_W = 21
const STAR_H = 21

const DESC_FS = 14
const DESC_LH = 22
const DESC_H = 88
const DESC_MB = 12

const CTA_W = 82
const CTA_H = 24
const CTA_FS = 14

export const CardContainer = styled.li`
  width: ${CARD_W}px;
  height: ${CARD_H}px;
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const Figure = styled.figure`
  position: relative;
  width: 100%;
  height: ${IMG_H}px;
  margin: 0;
`

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`

export const Badges = styled.div`
  position: absolute;
  top: ${BADGES_OFFSET_TOP}px;
  right: ${BADGES_OFFSET_RIGHT}px;
  display: flex;
  gap: ${BADGE_GAP}px;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
`

type BadgeVariant = 'destaque' | 'categoria'
type BadgeProps = { $variant?: BadgeVariant }

export const Badge = styled.span<BadgeProps>`
  height: ${BADGE_HEIGHT}px;
  padding: 0;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-size: 12px;
  font-weight: 700;
  line-height: ${BADGE_HEIGHT}px;
  text-align: center;
  border-radius: 4px;
  display: inline-block;
  white-space: nowrap;
  width: ${({ $variant }) =>
    $variant === 'destaque' ? `${BADGE_W_DESTAQUE}px` : `${BADGE_W_CATEGORIA}px`};
  order: ${({ $variant }) => ($variant === 'destaque' ? 1 : 2)};
`

export const Content = styled.div`
  flex: 1;
  padding: ${CONTENT_PAD_Y}px ${CONTENT_PAD_X}px;
  display: flex;
  flex-direction: column;
`

export const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  column-gap: 8px;
  margin-bottom: 8px;
`

export const Title = styled.h3`
  font-size: ${TITLE_FS}px;
  font-weight: 700;
  color: ${colors.primary};
  margin: 0;
  line-height: 21px;
  display: inline-block;
`

export const Rating = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${RATING_GAP}px;
  height: ${STAR_H}px;
`

export const RatingValue = styled.span`
  font-size: ${RATING_FS}px;
  font-weight: 700;
  color: ${colors.primary};
  line-height: 1;
`

export const StarIcon = styled.i`
  width: ${STAR_W}px;
  height: ${STAR_H}px;
  background: url(${estrela}) no-repeat center / contain;
  display: inline-block;
`

export const Description = styled.p`
  font-size: ${DESC_FS}px;
  line-height: ${DESC_LH}px;
  color: ${colors.primary};
  margin: 0 0 ${DESC_MB}px 0;
  max-height: ${DESC_H}px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`

export const Cta = styled.button`
  width: ${CTA_W}px;
  height: ${CTA_H}px;
  background-color: ${colors.primary};
  color: ${colors.white};
  border: none;
  font-size: ${CTA_FS}px;
  font-weight: 700;
  cursor: pointer;
  line-height: ${CTA_H}px;
  text-align: center;
  align-self: flex-start;
  margin-top: auto;
`