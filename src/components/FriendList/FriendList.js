import PropTypes from 'prop-types';

export default function FriendList(props) {
  const { children } = props;

  return <ul className="friend-list">{children}</ul>;
}

FriendList.propTypes = {
  children: PropTypes.node.isRequired,
};
