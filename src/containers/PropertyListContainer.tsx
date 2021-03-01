import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Spinner } from '../components/HomePage/Spinner/Spinner';
import { ErrorMessage } from '../components/HomePage/ErrorMessage/ErrorMessage';
import { PropertyList } from '../components/ResultPage/PropertyList/PropertyList';

interface IProperties {
  id: string;
  title: string;
  priceFormatted: string;
  imgUrl: string;
}

interface IPropertyListProps {
  properties?: Array<IProperties>;
  loading;
  error;
}

class PropertyListContainer extends Component<IPropertyListProps> {
  render() {
    const { properties, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorMessage />;
    }

    return <PropertyList properties={properties} />;
  }
}

const mapStateToProps = ({ properties, loading, error }) => ({
  properties,
  loading,
  error,
});

export default connect(mapStateToProps)(PropertyListContainer);
