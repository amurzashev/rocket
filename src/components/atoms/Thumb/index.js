import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Caption from '../Caption';

const Image = styled.img`
  background-image: url("${props => props.image}");
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  background-size: cover;
  position: relative;
  background-position: center;
`;

const StyledWrap = styled.div`
  box-sizing: border-box;
  color: black;
  width: 100%;
  max-width: 600px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  border: 1px solid ${props => props.theme.colors.darkGray};
  padding: 20px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Info = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const UserIcon = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 15px;
  margin-right: 10px;
  background-image: url("${props => props.icon}");
  background-color: rgba(0,0,0,0.5);
  background-size: contain;
`;

const TextInfo = styled.div`
  display: ƒlex;
  flex-direction: row;
`;

const Thumb = ({ item, link }) => {
  const extraInfo = (
    <TextInfo>
      <Caption bold inline margin="0 4px 0 0">{item.user.username}</Caption>
      <Caption inline size="s">{item.description}</Caption>
    </TextInfo>
  );
  const thumb = (
    <StyledWrap>
      <Info>
        <UserIcon icon={item.user.profile_image.medium} />
        <Caption>
          {item.user.name}
        </Caption>
      </Info>
      <Image src={item.urls.regular} alt={item.alt_description || 'a photo from api'} />
      { !link && extraInfo }
    </StyledWrap>
  );
  if (link) {
    return (
      <StyledLink
        to={{
          pathname: `/images/${item.id}`,
          state: {
            item,
          },
        }}
      >
        {thumb}
      </StyledLink>
    );
  }
  return thumb;
};

Thumb.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    description: PropTypes.string,
    user: PropTypes.shape({
      name: PropTypes.string,
      profile_image: PropTypes.shape({
        medium: PropTypes.string,
      }),
    }),
    urls: PropTypes.shape({
      regular: PropTypes.string,
    }),
  }).isRequired,
  link: PropTypes.bool.isRequired,
};
export default Thumb;
