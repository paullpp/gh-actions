#!/bin/bash
          
TICKETS=$(git log --pretty=format:"%s" | grep -o 'XYZ-[0-9]\+' | sort -u | tr '\n' ' ')

COMMENT="The following Jira tickets are referenced in this PR:\n"
for TICKET in $TICKETS; do
  COMMENT="${COMMENT}\n* [${TICKET}](https://your-jira-domain.atlassian.net/browse/${TICKET})"
done
COMMENT=$(echo -e "$COMMENT")
echo "$COMMENT"
gh pr comment 2 --body $COMMENT