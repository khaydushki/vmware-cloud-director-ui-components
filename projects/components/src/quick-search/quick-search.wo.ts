/*!
 * Copyright 2021 VMware, Inc.
 * SPDX-License-Identifier: BSD-2-Clause
 */

import { BaseWidgetObject } from '../utils/test/widget-object/widget-object';
import { QuickSearchDataUi } from './quick-search.dataui';

const QUICK_SEARCH_CURRENT_RESULT = '.selected';

/**
 * Widget Object for Quick-Search
 */
export class QuickSearchWo<T> extends BaseWidgetObject<T> {
    static tagName = 'vcd-quick-search';

    /**
     * Returns quick-search modal body
     */
    getModalBody = this.factory.dataUi(QuickSearchDataUi.quickSearchModal);

    /**
     * Returns user search input
     */
    getInput = this.factory.dataUi(QuickSearchDataUi.searchInputContainer);

    /**
     * Returns the titles of all sections appearing in the search results
     */
    getSearchResultSectionTitles = this.factory.dataUi(QuickSearchDataUi.searchResultSectionTitles);

    /**
     * Returns each search result item in each section
     */
    getSearchResultItems = this.factory.dataUi(QuickSearchDataUi.searchResultItems);

    /**
     * Returns the currently selected search result item
     */
    getSelectedSearchResultItem = this.factory.css(QUICK_SEARCH_CURRENT_RESULT);
}
