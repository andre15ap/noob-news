import PropTypes from 'prop-types';

import { Post, Img, Tag, Title, Content } from './styles';

export const PostComponent = ({ img, tag, titulo, conteudo }) => {
  return (
    <Post>
      <Img src={img} alt={titulo} />
      <div>
        <Tag>{tag}</Tag>
        <Title>{titulo}</Title>
        <Content>{conteudo}</Content>
      </div>
    </Post>
  );
};

PostComponent.propTypes = {
  img: PropTypes.string,
  tag: PropTypes.string,
  titulo: PropTypes.string,
  conteudo: PropTypes.string,
};
