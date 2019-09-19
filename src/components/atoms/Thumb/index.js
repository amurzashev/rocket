import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Image = styled.img`
  cursor: pointer;
  background-image: url("${props => props.image}");
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,0.5);
  background-size: cover;
  position: relative;
  background-position: center;
`;

const StyledLink = styled(Link)`
  box-sizing: border-box;
  display: block;
  text-decoration: none;
  color: black;
  width: 100%;
  max-width: 600px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  &:first-of-type {
    margin-top: 20px;
  }
  border: 1px solid ${props => props.theme.colors.darkGray};
  padding: 20px;
`;

const Caption = styled.p`
  display: block;
  font-size: 18px;
  margin: 0;
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

const Thumb = ({ item }) => (
  <StyledLink to={`/images/${item.id}`}>
    <Info>
      <UserIcon icon={item.user.profile_image.medium} />
      <Caption>
        {item.user.name}
      </Caption>
    </Info>
    <Image src={item.urls.regular} alt={item.description || 'a photo from api'} />
  </StyledLink>
);

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
};
export default Thumb;
