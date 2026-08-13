import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const detailsStyles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: colors.background
  },

  container: {
    flex: 1
  },

  backButton: {
    padding: spacing.md,
    marginTop: spacing.md,
  },

  backButtonText: {
    ...typography.body,
    color: colors.primary,
  },
  
  header: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
  },

  title: {
    ...typography.title,
    color: colors.text,
    textAlign: 'center'
  },

  subTitle: {
    ...typography.subtitle,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xs
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl * 2
  },

  loadingText: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },

  errorContainer: {
    padding: spacing.md,
    alignItems: 'center',
  },

  errorText: {
    color: colors.error,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: spacing.md,
    fontWeight: 600,
  },

  retryButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: spacing.md,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md,
  },

  retryButtonText: {
    color: colors.cardBackground,
    fontSize: 16,
    fontWeight: 600,
  }



})