import PropTypes from "prop-types";
function Link({title,content,link}){
    //console.log(props)
    return(
<>
    <a href={link}>{title}</a>
    <p>{content}</p>
   </>
    )
}
    Link.propTypes={
        title: PropTypes.string.isRequired,
        content: PropTypes.string,
        link: PropTypes.string
    }

    Link.defaultProps={
        content: " test"
    }

export default Link;