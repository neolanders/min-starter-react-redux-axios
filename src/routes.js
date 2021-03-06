import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Home,
    Widgets,
    Survey,
    NotFound,
    Pagination,
  } from 'containers';

export default (store) => {

  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Home}/>

      { /* Routes */ }
      <Route path="survey" component={Survey}/>
      <Route path="widgets" component={Widgets}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
