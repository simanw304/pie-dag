/*
 * Show or hide PIE DAG visualization.
 */
function toggleDagViz2(forJob) {
    var arrowSelector = ".expand-dag-viz-arrow2";
    $(arrowSelector).toggleClass('arrow-closed');
    $(arrowSelector).toggleClass('arrow-open');
    var shouldShow = $(arrowSelector).hasClass("arrow-open");
    if (shouldShow) {
        d3.select("#graph").style("display", "block");
        render();
        
    } else {
        d3.select("#graph").style("display", "none");
    }
    
}
