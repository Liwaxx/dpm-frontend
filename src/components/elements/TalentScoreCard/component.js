import React from 'react';
import PropTypes from 'prop-types';
import Text from '../../elements/Text';

const headerTexts = ['Ranking', 'Name', 'Previous', 'Point'];

class Component extends React.Component {
  _renderPrevious(previous, idx) {
    const { classes } = this.props;
    let arrow = '';

    if (previous > idx + 1) arrow = <span className={classes.arrowUp} />;
    else if (previous < idx + 1) arrow = <span className={classes.arrowDown} />;

    return (
      <React.Fragment>{arrow}&nbsp;{previous}</React.Fragment>
    );
  }

  _renderRank(rank) {
    const { classes } = this.props;
    
    if (rank == 1) return <span className={classes.rank1}>1</span>;
    else if (rank == 2) return <span className={classes.rank2}>2</span>;
    return <span className={classes.rank3}>3</span>;
  }

  _renderTableHeader() {
    const { classes } = this.props;

    return (
      <tr>
        {headerTexts.map((item, idx) => (
          <th key={idx} className={classes.headerCell}>
            <Text className={classes.headerText}>{item}</Text>
          </th>
        ))}
      </tr>
    );
  }

  _renderTableRow(item, idx) {
    const { classes } = this.props;
    const { name, previous, point } = item;
    const rowData = [this._renderRank(idx + 1), name, this._renderPrevious(previous, idx), point];

    return (
      <tr key={idx}>
        {rowData.map((item, idx) => (
          <td key={idx} className={classes.rowCell}>
            <Text className={classes.rowText}>{item}</Text>
          </td>
        ))}
      </tr>
    );
  }

  render() {
    const { className, classes, data } = this.props;
    const { name, rank = []} = data;
    const customClass = className ? `${classes.root} ${className}` : classes.root;

    return (
      <div className={customClass}>
        <Text className={classes.title}>{name}</Text>
        <table className={classes.content}>
          <thead>
            {this._renderTableHeader()}
          </thead>
          <tbody>
            {rank.map(this._renderTableRow.bind(this))}
          </tbody>
        </table>
      </div>
    );
  }
}

Component.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  data: PropTypes.object,
};

export default Component;
