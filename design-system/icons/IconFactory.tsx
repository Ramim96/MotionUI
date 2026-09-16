import * as LucideIcons from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Enums
import { IconVariant } from "./IconVariant";

export const IconFactory: Record<IconVariant, LucideIcon> = {
  // Actions
  [IconVariant.Copy]: LucideIcons.Copy,
  [IconVariant.Download]: LucideIcons.Download,
  [IconVariant.Edit]: LucideIcons.Edit,
  [IconVariant.ExternalLink]: LucideIcons.ExternalLink,
  [IconVariant.Link]: LucideIcons.Link,
  [IconVariant.Minus]: LucideIcons.Minus,
  [IconVariant.Plus]: LucideIcons.Plus,
  [IconVariant.Redo2]: LucideIcons.Redo2,
  [IconVariant.RefreshCw]: LucideIcons.RefreshCw,
  [IconVariant.RotateCcw]: LucideIcons.RotateCcw,
  [IconVariant.Save]: LucideIcons.Save,
  [IconVariant.Share2]: LucideIcons.Share2,
  [IconVariant.Trash2]: LucideIcons.Trash2,
  [IconVariant.Undo2]: LucideIcons.Undo2,
  [IconVariant.Unlink]: LucideIcons.Unlink,
  [IconVariant.Upload]: LucideIcons.Upload,

  // Charts & Analytics
  [IconVariant.Activity]: LucideIcons.Activity,
  [IconVariant.BarChart3]: LucideIcons.BarChart3,
  [IconVariant.ChartColumn]: LucideIcons.ChartColumn,
  [IconVariant.ChartLine]: LucideIcons.ChartLine,
  [IconVariant.ChartPie]: LucideIcons.ChartPie,
  [IconVariant.TrendingDown]: LucideIcons.TrendingDown,
  [IconVariant.TrendingUp]: LucideIcons.TrendingUp,

  // Communication
  [IconVariant.AtSign]: LucideIcons.AtSign,
  [IconVariant.Mail]: LucideIcons.Mail,
  [IconVariant.MessageCircle]: LucideIcons.MessageCircle,
  [IconVariant.MessagesSquare]: LucideIcons.MessagesSquare,
  [IconVariant.Phone]: LucideIcons.Phone,
  [IconVariant.Send]: LucideIcons.Send,

  // E-commerce
  [IconVariant.BadgeDollarSign]: LucideIcons.BadgeDollarSign,
  [IconVariant.CreditCard]: LucideIcons.CreditCard,
  [IconVariant.Package]: LucideIcons.Package,
  [IconVariant.Receipt]: LucideIcons.Receipt,
  [IconVariant.ShoppingBag]: LucideIcons.ShoppingBag,
  [IconVariant.ShoppingCart]: LucideIcons.ShoppingCart,
  [IconVariant.Truck]: LucideIcons.Truck,

  // Files
  [IconVariant.Archive]: LucideIcons.Archive,
  [IconVariant.File]: LucideIcons.File,
  [IconVariant.FileImage]: LucideIcons.FileImage,
  [IconVariant.FileText]: LucideIcons.FileText,
  [IconVariant.Folder]: LucideIcons.Folder,
  [IconVariant.FolderOpen]: LucideIcons.FolderOpen,
  [IconVariant.Image]: LucideIcons.Image,
  [IconVariant.Paperclip]: LucideIcons.Paperclip,

  // Location
  [IconVariant.Compass]: LucideIcons.Compass,
  [IconVariant.LocateFixed]: LucideIcons.LocateFixed,
  [IconVariant.Map]: LucideIcons.Map,
  [IconVariant.MapPin]: LucideIcons.MapPin,
  [IconVariant.Navigation]: LucideIcons.Navigation,

  // Media
  [IconVariant.Camera]: LucideIcons.Camera,
  [IconVariant.Music]: LucideIcons.Music,
  [IconVariant.Pause]: LucideIcons.Pause,
  [IconVariant.Play]: LucideIcons.Play,
  [IconVariant.SkipBack]: LucideIcons.SkipBack,
  [IconVariant.SkipForward]: LucideIcons.SkipForward,
  [IconVariant.Square]: LucideIcons.Square,
  [IconVariant.Video]: LucideIcons.Video,
  [IconVariant.Volume2]: LucideIcons.Volume2,
  [IconVariant.VolumeX]: LucideIcons.VolumeX,

  // Miscellaneous
  [IconVariant.Bookmark]: LucideIcons.Bookmark,
  [IconVariant.Check]: LucideIcons.Check,
  [IconVariant.CheckCheck]: LucideIcons.CheckCheck,
  [IconVariant.Eye]: LucideIcons.Eye,
  [IconVariant.EyeOff]: LucideIcons.EyeOff,
  [IconVariant.Flag]: LucideIcons.Flag,
  [IconVariant.Gift]: LucideIcons.Gift,
  [IconVariant.Globe]: LucideIcons.Globe,
  [IconVariant.Heart]: LucideIcons.Heart,
  [IconVariant.Home]: LucideIcons.Home,
  [IconVariant.House]: LucideIcons.House,
  [IconVariant.Star]: LucideIcons.Star,
  [IconVariant.Tag]: LucideIcons.Tag,

  // Navigation
  [IconVariant.ArrowDown]: LucideIcons.ArrowDown,
  [IconVariant.ArrowLeft]: LucideIcons.ArrowLeft,
  [IconVariant.ArrowRight]: LucideIcons.ArrowRight,
  [IconVariant.ArrowUp]: LucideIcons.ArrowUp,
  [IconVariant.ChevronDown]: LucideIcons.ChevronDown,
  [IconVariant.ChevronLeft]: LucideIcons.ChevronLeft,
  [IconVariant.ChevronRight]: LucideIcons.ChevronRight,
  [IconVariant.ChevronUp]: LucideIcons.ChevronUp,
  [IconVariant.Menu]: LucideIcons.Menu,
  [IconVariant.MoreHorizontal]: LucideIcons.MoreHorizontal,
  [IconVariant.MoreVertical]: LucideIcons.MoreVertical,
  [IconVariant.X]: LucideIcons.X,

  // Notifications & Status
  [IconVariant.BadgeCheck]: LucideIcons.BadgeCheck,
  [IconVariant.Bell]: LucideIcons.Bell,
  [IconVariant.BellOff]: LucideIcons.BellOff,
  [IconVariant.CircleAlert]: LucideIcons.CircleAlert,
  [IconVariant.CircleCheck]: LucideIcons.CircleCheck,
  [IconVariant.CircleQuestionMark]: LucideIcons.CircleQuestionMark,
  [IconVariant.Info]: LucideIcons.Info,
  [IconVariant.Loader]: LucideIcons.Loader,
  [IconVariant.LoaderCircle]: LucideIcons.LoaderCircle,
  [IconVariant.TriangleAlert]: LucideIcons.TriangleAlert,

  // Search & Filters
  [IconVariant.Filter]: LucideIcons.Filter,
  [IconVariant.ListFilter]: LucideIcons.ListFilter,
  [IconVariant.Search]: LucideIcons.Search,
  [IconVariant.SlidersHorizontal]: LucideIcons.SlidersHorizontal,
  [IconVariant.SortAsc]: LucideIcons.SortAsc,
  [IconVariant.SortDesc]: LucideIcons.SortDesc,

  // Settings
  [IconVariant.Cog]: LucideIcons.Cog,
  [IconVariant.Hammer]: LucideIcons.Hammer,
  [IconVariant.Paintbrush]: LucideIcons.Paintbrush,
  [IconVariant.Palette]: LucideIcons.Palette,
  [IconVariant.Settings]: LucideIcons.Settings,
  [IconVariant.Wrench]: LucideIcons.Wrench,

  // Theme
  [IconVariant.Monitor]: LucideIcons.Monitor,
  [IconVariant.Moon]: LucideIcons.Moon,
  [IconVariant.Sparkles]: LucideIcons.Sparkles,
  [IconVariant.Sun]: LucideIcons.Sun,

  // Time
  [IconVariant.AlarmClock]: LucideIcons.AlarmClock,
  [IconVariant.Calendar]: LucideIcons.Calendar,
  [IconVariant.CalendarDays]: LucideIcons.CalendarDays,
  [IconVariant.Clock]: LucideIcons.Clock,
  [IconVariant.History]: LucideIcons.History,
  [IconVariant.Timer]: LucideIcons.Timer,

  // User & Authentication
  [IconVariant.Fingerprint]: LucideIcons.Fingerprint,
  [IconVariant.Key]: LucideIcons.Key,
  [IconVariant.Lock]: LucideIcons.Lock,
  [IconVariant.LogIn]: LucideIcons.LogIn,
  [IconVariant.LogOut]: LucideIcons.LogOut,
  [IconVariant.Shield]: LucideIcons.Shield,
  [IconVariant.ShieldCheck]: LucideIcons.ShieldCheck,
  [IconVariant.Unlock]: LucideIcons.Unlock,
  [IconVariant.User]: LucideIcons.User,
  [IconVariant.UserMinus]: LucideIcons.UserMinus,
  [IconVariant.UserPlus]: LucideIcons.UserPlus,
  [IconVariant.Users]: LucideIcons.Users,
};