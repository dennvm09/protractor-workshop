import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';
import { AwesomeReport } from 'jasmine-awesome-report';

export const reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY,
      displayDuration: true
    }
  }));

  const config = {
    fullPath: 'reports',
    fileName: 'awesome',
    merge: true
  };
  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};
