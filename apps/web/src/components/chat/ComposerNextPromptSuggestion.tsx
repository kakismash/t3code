import { memo } from "react";
import { LightbulbIcon, XIcon } from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

/**
 * Banner offering a generated follow-up prompt after a turn completes.
 * Accepting inserts the text into the composer; it never sends on its own.
 */
export const ComposerNextPromptSuggestion = memo(function ComposerNextPromptSuggestion({
  suggestion,
  onAccept,
  onDismiss,
}: {
  suggestion: string;
  onAccept: () => void;
  onDismiss: () => void;
}) {
  return (
    <div className="px-4 py-3 sm:px-5 sm:py-3.5">
      <div className="flex items-start gap-2">
        <Badge
          variant="info"
          size="sm"
          className="mt-0.5 shrink-0 rounded-md px-1.5 py-0 font-semibold tracking-wide uppercase"
        >
          <LightbulbIcon aria-hidden className="mr-1 size-3" />
          Next
        </Badge>
        <button
          type="button"
          className="min-w-0 flex-1 cursor-pointer text-left text-sm text-muted-foreground transition-colors hover:text-foreground"
          onClick={onAccept}
          title="Insert this prompt into the composer"
        >
          <span className="line-clamp-2">{suggestion}</span>
        </button>
        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          className="shrink-0 text-muted-foreground hover:text-foreground"
          aria-label="Dismiss suggested prompt"
          onClick={onDismiss}
        >
          <XIcon className="size-3.5" />
        </Button>
      </div>
    </div>
  );
});
