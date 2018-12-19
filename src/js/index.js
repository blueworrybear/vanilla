/*!
 * @author Isis (igraziatto) Graziatto <isis.g@vanillaforums.com>
 * @copyright 2009-2018 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { setupMobileNavigation } from "./mobileNavigation";
import { fixToggleFlyoutBehaviour } from "./overrides";

$(() => {
    setupMobileNavigation();
    //fixToggleFlyoutBehaviour();

    $("select").wrap('<div class="SelectWrapper"></div>');
});
