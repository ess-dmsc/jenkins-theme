// Solution from https://github.com/jan-molak/jenkins-build-monitor-plugin/issues/270#issuecomment-372725637.

// Clean up names
function cleanBuildMonitorNames(){
  document.querySelectorAll('#widgets h2 a').forEach(function(a) {
    // remove org name
    a.innerHTML = a.innerHTML.replace('European Spallation Source - Data Management and Software Centre » ', '');
  })
}

document.addEventListener('DOMContentLoaded', function() {
  if(document.body.classList.contains('build-monitor')) {
    setTimeout(cleanBuildMonitorNames, 100)
    setTimeout(cleanBuildMonitorNames, 500)
  }
});
